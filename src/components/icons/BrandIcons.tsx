import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
  color?: string;
}

export const WhatsAppIcon: React.FC<IconProps> = ({
  size = 20,
  className = '',
  color = 'currentColor',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.677.15-.2.301-.777.978-.953 1.178-.175.201-.351.226-.652.075-.301-.15-1.27-.468-2.42-1.493-.894-.798-1.498-1.784-1.674-2.085-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.201-.301.301-.502.1-.201.05-.376-.025-.527-.075-.15-.677-1.631-.928-2.233-.244-.586-.492-.506-.677-.516-.175-.009-.376-.011-.577-.011-.201 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.51 0 1.48 1.079 2.91 1.23 3.111.15.201 2.123 3.242 5.143 4.547.718.31 1.279.496 1.716.635.722.23 1.379.197 1.898.12.578-.087 1.78-.727 2.031-1.43.251-.703.251-1.305.176-1.43-.076-.126-.277-.201-.578-.352z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.176L2.146 21.46a.75.75 0 00.914.914l4.284-1.292A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zM3.5 12c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5-3.806 8.5-8.5 8.5a8.46 8.46 0 01-4.304-1.171.75.75 0 00-.543-.086l-3.328 1.004 1.004-3.328a.75.75 0 00-.086-.543A8.46 8.46 0 013.5 12z"
      />
    </svg>
  );
};

export const InstagramIcon: React.FC<IconProps> = ({
  size = 20,
  className = '',
  color = 'currentColor',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      <rect
        x="2.5"
        y="2.5"
        width="19"
        height="19"
        rx="5.5"
        stroke={color}
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="4.2" stroke={color} strokeWidth="2" />
      <circle cx="17.2" cy="6.8" r="1.2" fill={color} />
    </svg>
  );
};

export const TikTokIcon: React.FC<IconProps> = ({
  size = 20,
  className = '',
  color = 'currentColor',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      <path d="M19.589 6.686a4.793 4.793 0 01-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 01-2.884 2.868 2.893 2.893 0 01-2.892-2.883 2.897 2.897 0 012.892-2.887c.294 0 .576.045.843.123V9.378a6.32 6.32 0 00-.843-.057c-3.52 0-6.376 2.863-6.376 6.393 0 3.53 2.856 6.393 6.376 6.393 3.504 0 6.353-2.839 6.375-6.347l.006-.214V8.472a8.212 8.212 0 005.018 1.688V6.716a4.85 4.85 0 01-1.3-.03z" />
    </svg>
  );
};
