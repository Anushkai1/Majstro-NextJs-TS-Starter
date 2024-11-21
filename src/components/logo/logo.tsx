'use client';

import type { BoxProps } from '@mui/material/Box';

import { useId, forwardRef } from 'react';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import { RouterLink } from 'src/routes/components';

import { logoClasses } from './classes';

// ----------------------------------------------------------------------

export type LogoProps = BoxProps & {
  href?: string;
  isSingle?: boolean;
  disableLink?: boolean;
};

export const Logo = forwardRef<HTMLDivElement, LogoProps>(
  (
    { width, href = '/', height, isSingle = true, disableLink = false, className, sx, ...other },
    ref
  ) => {
    const theme = useTheme();

    const gradientId = useId();

    const TEXT_PRIMARY = theme.vars.palette.text.primary;
    const PRIMARY_LIGHT = theme.vars.palette.primary.light;
    const PRIMARY_MAIN = theme.vars.palette.primary.main;
    const PRIMARY_DARKER = theme.vars.palette.primary.dark;

    const singleLogo = (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 543.93 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={`url(#${`${gradientId}-1`})`}
          fillRule="evenodd"
          clipRule="evenodd"
          d="m336.61,13.39l-64.64,64.64,121.21,121.21c13.39,13.39,13.39,35.1,0,48.48l-64.64,64.64c-4.46,4.46-4.46,11.7,0,16.16l8.08,8.08c17.85,17.85,46.79,17.85,64.64,0l129.29-129.29c17.85-17.85,17.85-46.79,0-64.64L401.26,13.39c-17.85-17.85-46.79-17.85-64.64,0Z" />
        <path
          fill={`url(#${`${gradientId}-1`})`}
          fillRule="evenodd"
          clipRule="evenodd"
          d="m142.68,13.39L13.39,142.68c-17.85,17.85-17.85,46.79,0,64.64l129.29,129.29c17.85,17.85,46.79,17.85,64.64,0l8.08-8.08c4.46-4.46,4.46-11.7,0-16.16l-64.64-64.64c-13.39-13.39-13.39-35.1,0-48.48l121.21-121.21L207.32,13.39c-17.85-17.85-46.79-17.85-64.64,0Z" />
        <path
          fill={`url(#${`${gradientId}-2`})`}
          fillRule="evenodd"
          clipRule="evenodd"
          d="m288.13,255.81c-8.93,8.93-23.4,8.93-32.32,0l-80.81-80.81,96.97-96.97,96.97,96.97-80.81,80.81Z" />

        <defs>
          <linearGradient id={`${gradientId}-1`} x1="407.81" y1="47.52" x2="408.3" y2="319.48" gradientUnits="userSpaceOnUse">
            <stop offset=".3" stopColor={PRIMARY_MAIN} />
            <stop offset=".38" stopColor={PRIMARY_MAIN} stopOpacity=".96" />
            <stop offset=".51" stopColor={PRIMARY_MAIN} stopOpacity=".87" />
            <stop offset=".67" stopColor={PRIMARY_MAIN} stopOpacity=".71" />
            <stop offset=".86" stopColor={PRIMARY_MAIN} stopOpacity=".5" />
            <stop offset="1" stopColor={PRIMARY_MAIN} stopOpacity=".32" />
          </linearGradient>
          <linearGradient id={`${gradientId}-2`} x1="140.32" y1="338.12" x2="134.69" y2="63.91" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor={PRIMARY_MAIN} stopOpacity=".1" />
            <stop offset=".07" stopColor={PRIMARY_MAIN} stopOpacity=".22" />
            <stop offset=".24" stopColor={PRIMARY_MAIN} stopOpacity=".5" />
            <stop offset=".4" stopColor={PRIMARY_MAIN} stopOpacity=".71" />
            <stop offset=".53" stopColor={PRIMARY_MAIN} stopOpacity=".87" />
            <stop offset=".64" stopColor={PRIMARY_MAIN} stopOpacity=".96" />
            <stop offset=".7" stopColor={PRIMARY_MAIN} />
          </linearGradient>
        </defs>
      </svg>
    );

    const fullLogo = (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1251.8 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <g>
            <path
              fill={`url(#${`${gradientId}-3`})`}
              fillRule="evenodd"
              clipRule="evenodd"
              d="m336.61,13.39l-64.64,64.64,121.21,121.21c13.39,13.39,13.39,35.1,0,48.48l-64.64,64.64c-4.46,4.46-4.46,11.7,0,16.16l8.08,8.08c17.85,17.85,46.79,17.85,64.64,0l129.29-129.29c17.85-17.85,17.85-46.79,0-64.64L401.26,13.39c-17.85-17.85-46.79-17.85-64.64,0Z" />
            <path
              fill={`url(#${`${gradientId}-3`})`}
              fillRule="evenodd"
              clipRule="evenodd"
              d="m142.68,13.39L13.39,142.68c-17.85,17.85-17.85,46.79,0,64.64l129.29,129.29c17.85,17.85,46.79,17.85,64.64,0l8.08-8.08c4.46-4.46,4.46-11.7,0-16.16l-64.64-64.64c-13.39-13.39-13.39-35.1,0-48.48l121.21-121.21L207.32,13.39c-17.85-17.85-46.79-17.85-64.64,0Z" />
            <path
              fill={`url(#${`${gradientId}-4`})`}
              fillRule="evenodd"
              clipRule="evenodd"
              d="m288.13,255.81c-8.93,8.93-23.4,8.93-32.32,0l-80.81-80.81,96.97-96.97,96.97,96.97-80.81,80.81Z" />
          </g>
          <g>
            <path
              fill={TEXT_PRIMARY}
              fillRule="evenodd"
              clipRule="evenodd" d="m611.95,245.44c-13.09,0-23.96-3.42-32.59-10.27-8.63-6.84-12.95-17.05-12.95-30.62,0-10.24,2.41-18.27,7.23-24.11,4.82-5.83,11.14-10.1,18.97-12.81,7.83-2.71,16.26-4.48,25.31-5.31,11.9-1.19,20.41-2.44,25.53-3.75,5.12-1.31,7.68-4.17,7.68-8.57v-.54c0-5.65-1.77-10.03-5.31-13.12-3.54-3.09-8.56-4.64-15.04-4.64-6.84,0-12.29,1.49-16.34,4.46-4.05,2.98-6.73,6.76-8.04,11.34l-35.18-2.86c2.62-12.5,9.12-22.41,19.51-29.73,10.38-7.32,23.79-10.98,40.22-10.98,10.18,0,19.7,1.61,28.57,4.82,8.87,3.21,16.03,8.23,21.47,15.04,5.45,6.82,8.17,15.67,8.17,26.56v92.49h-36.07v-19.02h-1.07c-3.33,6.37-8.32,11.56-14.95,15.58-6.64,4.02-15.01,6.03-25.13,6.03Zm10.89-26.25c8.33,0,15.18-2.42,20.53-7.28,5.36-4.85,8.04-10.88,8.04-18.08v-14.55c-1.49,1.01-3.79,1.91-6.92,2.68-3.12.77-6.46,1.44-10,2.01-3.54.57-6.71,1.06-9.51,1.47-6.67.95-12.04,2.83-16.12,5.62-4.08,2.8-6.12,6.87-6.12,12.23s1.89,9.2,5.67,11.87c3.78,2.68,8.58,4.02,14.42,4.02Z" />
            <path
              fill={TEXT_PRIMARY}
              fillRule="evenodd"
              clipRule
              ="evenodd" d="m718.73,105.72h38.03v143.92c0,15.89-4.61,27.3-13.84,34.24-9.23,6.93-21.93,10.4-38.12,10.4-1.31,0-2.57-.02-3.79-.04-1.22-.03-2.51-.08-3.88-.13v-29.73c1.01.06,1.91.1,2.68.13.77.03,1.55.04,2.32.04,6.13,0,10.43-1.29,12.9-3.88,2.47-2.59,3.71-6.47,3.71-11.65V105.72Zm18.93-17.68c-5.6,0-10.42-1.89-14.46-5.67-4.05-3.78-6.07-8.32-6.07-13.61s2.02-9.82,6.07-13.57c4.05-3.75,8.87-5.62,14.46-5.62s10.5,1.88,14.55,5.62c4.05,3.75,6.07,8.27,6.07,13.57s-2.02,9.84-6.07,13.61c-4.05,3.78-8.9,5.67-14.55,5.67Z" />
            <path fill={TEXT_PRIMARY}
              fillRule="evenodd"
              clipRule="evenodd" d="m901.21,144.82l-34.82,2.14c-.95-4.4-3.36-8.18-7.23-11.34-3.87-3.15-9.11-4.73-15.71-4.73-5.89,0-10.88,1.24-14.95,3.71-4.08,2.47-6.09,5.76-6.03,9.87-.06,3.27,1.24,6.04,3.88,8.3,2.65,2.26,7.16,4.08,13.53,5.45l24.82,5c26.37,5.42,39.58,17.8,39.64,37.14,0,8.99-2.63,16.87-7.9,23.66s-12.49,12.07-21.65,15.85c-9.17,3.78-19.67,5.67-31.51,5.67-18.15,0-32.62-3.79-43.39-11.38-10.77-7.59-17.05-17.93-18.84-31.02l37.41-1.96c1.19,5.6,3.94,9.82,8.26,12.68,4.31,2.86,9.87,4.29,16.65,4.29s12.04-1.31,16.12-3.93c4.08-2.62,6.14-5.95,6.2-10-.18-6.79-6.04-11.34-17.59-13.66l-23.75-4.73c-26.55-5.3-39.76-18.36-39.64-39.19-.06-13.21,5.22-23.63,15.85-31.25,10.62-7.62,24.71-11.43,42.27-11.43s30.96,3.66,40.93,10.98c9.97,7.32,15.79,17.29,17.45,29.91Z" />
            <path
              fill={TEXT_PRIMARY}
              fillRule="evenodd"
              clipRule="evenodd" d="m1001.29,105.72v28.57h-25.8v66.42c0,5.24,1.19,8.78,3.57,10.62,2.38,1.85,5.48,2.77,9.29,2.77,1.79,0,3.57-.16,5.36-.49,1.79-.33,3.15-.58,4.11-.76l5.98,28.3c-1.91.6-4.58,1.29-8.04,2.1-3.45.8-7.65,1.29-12.59,1.47-13.81.59-24.89-2.4-33.26-8.97-8.36-6.58-12.51-16.59-12.45-30.04v-71.42h-18.75v-28.57h18.75v-32.85h38.03v32.85h25.8Z" />
            <path
              fill={TEXT_PRIMARY}
              fillRule="evenodd"
              clipRule="evenodd" d="m1026.02,242.85V105.72h36.87v23.93h1.43c2.5-8.51,6.7-14.95,12.59-19.33,5.89-4.37,12.68-6.56,20.36-6.56,4.23,0,8.21.45,11.96,1.34v33.75c-1.79-.59-4.26-1.09-7.41-1.47-3.16-.39-6.04-.58-8.66-.58-8.39,0-15.34,2.63-20.85,7.9-5.51,5.27-8.26,12.13-8.26,20.58v77.58h-38.03Z" />
            <path
              fill={TEXT_PRIMARY}
              fillRule="evenodd"
              clipRule="evenodd" d="m1184.31,245.53c-13.87,0-25.85-2.96-35.93-8.88-10.09-5.92-17.87-14.2-23.35-24.82-5.48-10.62-8.21-22.96-8.21-37.01s2.74-26.56,8.21-37.18c5.48-10.62,13.26-18.9,23.35-24.82,10.09-5.92,22.07-8.88,35.93-8.88s25.85,2.96,35.93,8.88c10.09,5.92,17.87,14.2,23.35,24.82,5.47,10.62,8.21,23.02,8.21,37.18s-2.74,26.38-8.21,37.01c-5.48,10.62-13.26,18.9-23.35,24.82-10.09,5.92-22.07,8.88-35.93,8.88Zm.18-29.46c9.4,0,16.53-3.93,21.38-11.78,4.85-7.86,7.28-17.77,7.28-29.73s-2.43-21.89-7.28-29.77c-4.85-7.89-11.98-11.83-21.38-11.83s-16.82,3.94-21.7,11.83c-4.88,7.89-7.32,17.81-7.32,29.77s2.44,21.87,7.32,29.73c4.88,7.86,12.11,11.78,21.7,11.78Z" />
          </g>
        </g>

        <defs>
          <linearGradient id={`${gradientId}-3`} x1="407.81" y1="47.52" x2="408.3" y2="319.48" gradientUnits="userSpaceOnUse">
            <stop offset=".3" stopColor={PRIMARY_MAIN} />
            <stop offset=".38" stopColor={PRIMARY_MAIN} stopOpacity=".96" />
            <stop offset=".51" stopColor={PRIMARY_MAIN} stopOpacity=".87" />
            <stop offset=".67" stopColor={PRIMARY_MAIN} stopOpacity=".71" />
            <stop offset=".86" stopColor={PRIMARY_MAIN} stopOpacity=".5" />
            <stop offset="1" stopColor={PRIMARY_MAIN} stopOpacity=".32" />
          </linearGradient>
          <linearGradient id={`${gradientId}-4`} x1="140.32" y1="338.12" x2="134.69" y2="63.91" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor={PRIMARY_MAIN} stopOpacity=".1" />
            <stop offset=".07" stopColor={PRIMARY_MAIN} stopOpacity=".22" />
            <stop offset=".24" stopColor={PRIMARY_MAIN} stopOpacity=".5" />
            <stop offset=".4" stopColor={PRIMARY_MAIN} stopOpacity=".71" />
            <stop offset=".53" stopColor={PRIMARY_MAIN} stopOpacity=".87" />
            <stop offset=".64" stopColor={PRIMARY_MAIN} stopOpacity=".96" />
            <stop offset=".7" stopColor={PRIMARY_MAIN} />
          </linearGradient>
        </defs>
      </svg>
    );

    const baseSize = {
      width: width ?? 40,
      height: height ?? 40,
      ...(!isSingle && {
        width: width ?? 86,
        height: height ?? 24,
      }),
    };

    return (
      <Box
        ref={ref}
        component={RouterLink}
        href={href}
        className={logoClasses.root.concat(className ? ` ${className}` : '')}
        aria-label="Logo"
        sx={{
          ...baseSize,
          flexShrink: 0,
          display: 'inline-flex',
          verticalAlign: 'middle',
          ...(disableLink && { pointerEvents: 'none' }),
          ...sx,
        }}
        {...other}
      >
        {isSingle ? singleLogo : fullLogo}
      </Box>
    );
  }
);
