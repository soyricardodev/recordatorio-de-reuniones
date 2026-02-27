This is an Astro-based meeting reminder application with:
- **Framework**: Astro 5.x with server-side rendering
- **Authentication**: Clerk (@clerk/astro)
- **Styling**: Tailwind CSS 4.x with DaisyUI 5.x
- **Deployment**: Node.js adapter (@astrojs/node)
- **Language**: TypeScript (strict mode)

## Build Commands

All commands run from the `web/` directory:

```bash
cd web
```

### Development
```bash
pnpm dev          # Never run this unless i say
```

### Building
```bash
pnpm build        # Build production bundle to ./dist
```

### Type Checking & Linting
```bash
pnpm astro check  # Run TypeScript type checking
pnpm astro sync   # Sync Astro types
```

### Running CLI Commands
```bash
pnpm dlx astro add <package>   # Add integrations
pnpm dlx astro -- --help      # Get Astro CLI help
```

## Project Structure

```
web/
├── src/
│   ├── components/        # Reusable Astro components
│   │   └── *.astro
│   ├── layouts/           # Page layouts
│   │   └── *.astro
│   ├── pages/             # Routes (file-based routing)
│   │   ├── index.astro
│   │   ├── registrarse/
│   │   └── iniciar-sesion/
│   ├── styles/
│   │   └── global.css     # Tailwind + DaisyUI config
│   ├── env.d.ts           # TypeScript environment types
│   └── middleware.ts     # Clerk authentication middleware
├── public/               # Static assets
├── astro.config.mjs      # Astro configuration
├── tsconfig.json         # TypeScript configuration
└── package.json
```

- [Astro Docs](https://docs.astro.build)
- [Clerk Astro Integration](https://clerk.com/docs/integrations/webhooks/overview)
- [Tailwind CSS v4](https://tailwindcss.com)
- [DaisyUI](https://daisyui.com)
