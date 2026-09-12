'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { liquidMetalFragmentShader, ShaderMount } from '@paper-design/shaders';
import { Sparkles, ArrowRight, LucideIcon } from 'lucide-react';

export interface LiquidMetalButtonProps {
  label?: string;
  onClick?: () => void;
  href?: string;
  viewMode?: 'text' | 'icon' | 'both';
  icon?: LucideIcon | React.ReactNode | string;
  width?: number;
  height?: number;
  className?: string;
  target?: string;
  rel?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
}

export function LiquidMetalButton({
  label = 'Get Started',
  onClick,
  href,
  viewMode = 'text',
  icon: CustomIcon,
  width: customWidth,
  height = 46,
  className = '',
  target,
  rel,
  disabled = false,
  type = 'button',
  children,
}: LiquidMetalButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [ripples, setRipples] = useState<
    Array<{ x: number; y: number; id: number }>
  >([]);
  const shaderRef = useRef<HTMLDivElement>(null);
  // biome-ignore lint/suspicious/noExplicitAny: External library without types
  const shaderMount = useRef<any>(null);
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const rippleId = useRef(0);

  const dimensions = useMemo(() => {
    if (viewMode === 'icon') {
      const w = customWidth || 46;
      return {
        width: w,
        height: height,
        innerWidth: w - 4,
        innerHeight: height - 4,
        shaderWidth: w,
        shaderHeight: height,
      };
    } else {
      // Calculate dynamic width based on label length if not explicitly provided
      const estimatedWidth = Math.max(142, Math.round(label.length * 9.2 + (viewMode === 'both' || CustomIcon ? 56 : 38)));
      const w = customWidth || estimatedWidth;
      return {
        width: w,
        height: height,
        innerWidth: w - 4,
        innerHeight: height - 4,
        shaderWidth: w,
        shaderHeight: height,
      };
    }
  }, [viewMode, label, customWidth, height, CustomIcon]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const styleId = 'shader-canvas-style-exploded';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        .shader-container-exploded canvas {
          width: 100% !important;
          height: 100% !important;
          display: block !important;
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          border-radius: 100px !important;
        }
        @keyframes ripple-animation {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0.6;
          }
          100% {
            transform: translate(-50%, -50%) scale(4);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }

    let isMounted = true;

    const loadShader = async () => {
      try {
        if (shaderRef.current && isMounted) {
          if (shaderMount.current?.destroy) {
            shaderMount.current.destroy();
          }

          shaderMount.current = new ShaderMount(
            shaderRef.current,
            liquidMetalFragmentShader,
            {
              u_repetition: 4,
              u_softness: 0.5,
              u_shiftRed: 0.3,
              u_shiftBlue: 0.3,
              u_distortion: 0,
              u_contour: 0,
              u_angle: 45,
              u_scale: 8,
              u_shape: 1,
              u_offsetX: 0.1,
              u_offsetY: -0.1,
            },
            undefined,
            0.6,
          );
        }
      } catch (error) {
        console.warn('[LiquidMetalButton] Shader initialization skipped:', error);
      }
    };

    loadShader();

    return () => {
      isMounted = false;
      if (shaderMount.current?.destroy) {
        shaderMount.current.destroy();
        shaderMount.current = null;
      }
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    shaderMount.current?.setSpeed?.(1.2);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPressed(false);
    shaderMount.current?.setSpeed?.(0.6);
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }

    if (shaderMount.current?.setSpeed) {
      shaderMount.current.setSpeed(2.4);
      setTimeout(() => {
        if (isHovered) {
          shaderMount.current?.setSpeed?.(1.2);
        } else {
          shaderMount.current?.setSpeed?.(0.6);
        }
      }, 300);
    }

    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const ripple = { x, y, id: rippleId.current++ };

      setRipples((prev) => [...prev, ripple]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
      }, 600);
    }

    onClick?.();
  };

  const renderContent = () => (
    <div
      style={{
        perspective: '1000px',
        perspectiveOrigin: '50% 50%',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: `${dimensions.width}px`,
          height: `${dimensions.height}px`,
          transformStyle: 'preserve-3d',
          transition:
            'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s ease, height 0.4s ease',
          transform: 'none',
        }}
      >
        {/* Label & Icon Layer */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: `${dimensions.width}px`,
            height: `${dimensions.height}px`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '0 16px',
            transformStyle: 'preserve-3d',
            transition:
              'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s ease, height 0.4s ease, gap 0.4s ease',
            transform: 'translateZ(20px)',
            zIndex: 30,
            pointerEvents: 'none',
          }}
        >
          {(viewMode === 'icon' || viewMode === 'both' || CustomIcon) && (
            React.isValidElement(CustomIcon) ? (
              CustomIcon
            ) : typeof CustomIcon === 'string' ? (
              CustomIcon === 'arrow' ? (
                <ArrowRight
                  size={16}
                  className={`transition-all duration-300 ${
                    isHovered ? 'text-amber-300 scale-110 drop-shadow-[0_0_8px_rgba(255,177,59,0.8)]' : 'text-slate-200'
                  }`}
                  style={{
                    filter: 'drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.8))',
                    transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  }}
                />
              ) : (
                <Sparkles
                  size={16}
                  className={`transition-all duration-300 ${
                    isHovered ? 'text-cyan-300 scale-110 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]' : 'text-slate-300'
                  }`}
                  style={{
                    filter: 'drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.8))',
                    transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  }}
                />
              )
            ) : typeof CustomIcon === 'function' ? (
              <CustomIcon
                size={16}
                className={`transition-all duration-300 ${
                  isHovered ? 'text-cyan-300 scale-110 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]' : 'text-slate-200'
                }`}
                style={{
                  filter: 'drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.8))',
                  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
              />
            ) : viewMode === 'both' || CustomIcon ? (
              <ArrowRight
                size={16}
                className={`transition-all duration-300 ${
                  isHovered ? 'text-cyan-300 scale-110 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]' : 'text-slate-200'
                }`}
                style={{
                  filter: 'drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.8))',
                  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
              />
            ) : (
              <Sparkles
                size={16}
                className={`transition-all duration-300 ${
                  isHovered ? 'text-cyan-300 scale-110 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]' : 'text-slate-300'
                }`}
                style={{
                  filter: 'drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.8))',
                  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
              />
            )
          )}
          {viewMode !== 'icon' && (
            <span
              className="tracking-wider uppercase font-bold text-xs sm:text-sm select-none"
              style={{
                color: isHovered ? '#ffe2a0' : '#f8fafc',
                textShadow: isHovered
                  ? '0px 0px 14px rgba(255, 177, 59, 0.8), 0px 1px 3px rgba(0,0,0,0.9)'
                  : '0px 1px 3px rgba(0, 0, 0, 0.8)',
                transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                whiteSpace: 'nowrap',
              }}
            >
              {label}
            </span>
          )}
        </div>

        {/* Inner Dark Pill Background */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: `${dimensions.width}px`,
            height: `${dimensions.height}px`,
            transformStyle: 'preserve-3d',
            transition:
              'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s ease, height 0.4s ease',
            transform: `translateZ(10px) ${isPressed ? 'translateY(1px) scale(0.98)' : 'translateY(0) scale(1)'}`,
            zIndex: 20,
          }}
        >
          <div
            style={{
              width: `${dimensions.innerWidth}px`,
              height: `${dimensions.innerHeight}px`,
              margin: '2px',
              borderRadius: '100px',
              background: 'linear-gradient(180deg, #171a1d 0%, #080a0c 100%)',
              border: isHovered ? '1px solid rgba(255, 177, 59, 0.5)' : '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: isPressed
                ? 'inset 0px 2px 4px rgba(0, 0, 0, 0.6), inset 0px 1px 2px rgba(0, 0, 0, 0.4)'
                : isHovered
                ? '0 0 20px rgba(255, 177, 59, 0.35), inset 0 0 10px rgba(255, 177, 59, 0.15)'
                : 'none',
              transition:
                'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s ease, height 0.4s ease, box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1), border 0.3s ease',
            }}
          />
        </div>

        {/* Shader Container */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: `${dimensions.width}px`,
            height: `${dimensions.height}px`,
            transformStyle: 'preserve-3d',
            transition:
              'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s ease, height 0.4s ease',
            transform: `translateZ(0px) ${isPressed ? 'translateY(1px) scale(0.98)' : 'translateY(0) scale(1)'}`,
            zIndex: 10,
          }}
        >
          <div
            style={{
              height: `${dimensions.height}px`,
              width: `${dimensions.width}px`,
              borderRadius: '100px',
              boxShadow: isPressed
                ? '0px 0px 0px 1px rgba(255, 177, 59, 0.5), 0px 1px 2px 0px rgba(0, 0, 0, 0.5)'
                : isHovered
                ? '0px 0px 0px 1px rgba(255, 177, 59, 0.7), 0px 0px 25px rgba(255, 177, 59, 0.5), 0px 4px 10px rgba(0, 0, 0, 0.5)'
                : '0px 0px 0px 1px rgba(255, 255, 255, 0.12), 0px 10px 20px 0px rgba(0, 0, 0, 0.4)',
              transition:
                'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s ease, height 0.4s ease, box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
              background: 'rgb(0 0 0 / 0)',
            }}
          >
            <div
              ref={shaderRef}
              className="shader-container-exploded"
              style={{
                borderRadius: '100px',
                overflow: 'hidden',
                position: 'relative',
                width: `${dimensions.shaderWidth}px`,
                maxWidth: `${dimensions.shaderWidth}px`,
                height: `${dimensions.shaderHeight}px`,
                transition: 'width 0.4s ease, height 0.4s ease',
              }}
            />
          </div>
        </div>

        {/* Clickable Overlay Element (Button or Link) */}
        {href ? (
          <Link
            ref={buttonRef as React.RefObject<HTMLAnchorElement>}
            href={href}
            target={target}
            rel={rel}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={() => setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: `${dimensions.width}px`,
              height: `${dimensions.height}px`,
              background: 'transparent',
              border: 'none',
              cursor: disabled ? 'not-allowed' : 'pointer',
              outline: 'none',
              zIndex: 40,
              transformStyle: 'preserve-3d',
              transform: 'translateZ(25px)',
              transition:
                'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s ease, height 0.4s ease',
              overflow: 'hidden',
              borderRadius: '100px',
              display: 'block',
            }}
            aria-label={label}
          >
            {ripples.map((ripple) => (
              <span
                key={ripple.id}
                style={{
                  position: 'absolute',
                  left: `${ripple.x}px`,
                  top: `${ripple.y}px`,
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background:
                    'radial-gradient(circle, rgba(255, 177, 59, 0.6) 0%, rgba(255, 177, 59, 0) 70%)',
                  pointerEvents: 'none',
                  animation: 'ripple-animation 0.6s ease-out',
                }}
              />
            ))}
          </Link>
        ) : (
          <button
            ref={buttonRef as React.RefObject<HTMLButtonElement>}
            type={type}
            disabled={disabled}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={() => setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: `${dimensions.width}px`,
              height: `${dimensions.height}px`,
              background: 'transparent',
              border: 'none',
              cursor: disabled ? 'not-allowed' : 'pointer',
              outline: 'none',
              zIndex: 40,
              transformStyle: 'preserve-3d',
              transform: 'translateZ(25px)',
              transition:
                'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s ease, height 0.4s ease',
              overflow: 'hidden',
              borderRadius: '100px',
            }}
            aria-label={label}
          >
            {ripples.map((ripple) => (
              <span
                key={ripple.id}
                style={{
                  position: 'absolute',
                  left: `${ripple.x}px`,
                  top: `${ripple.y}px`,
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background:
                    'radial-gradient(circle, rgba(255, 177, 59, 0.6) 0%, rgba(255, 177, 59, 0) 70%)',
                  pointerEvents: 'none',
                  animation: 'ripple-animation 0.6s ease-out',
                }}
              />
            ))}
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div className={`relative inline-block ${className}`}>
      {renderContent()}
    </div>
  );
}

export default LiquidMetalButton;
