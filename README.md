# NurTani Dashboard

A premium agricultural dashboard built with Nuxt 4, shadcn-vue, and TailwindCSS 4. This project follows strict architectural principles and atomic design to ensure long-term maintainability and scalability.

## 🏗️ Architecture & Component Structure

We follow **Atomic Design** principles for UI composition and strict separation of concerns for data flow.

### Component Layers (`app/components/`)

- **Atoms**: Thin presentation-only wrappers around `shadcn-vue` primitives. No business logic or API calls.
- **Molecules**: Simple combinations of atoms with light UI logic (formatting, local state).
- **Organisms**: Complex, functional blocks composed of molecules and atoms. May use composables for UI state.
- **Templates**: Structural compositions that define page-level layouts. No business logic.
- **Layout**: Shell-specific UI components (Sidebars, Headers) used across the application.

### Data Flow (`app/services/` & `app/composables/`)

We enforce a strict unidirectional data flow:
**Page -> Composable -> Service -> API Client**

1.  **Pages**: Entry points that consume composables. NEVER call `$fetch` or `useFetch` directly.
2.  **Composables** (`useXxx.ts`): Orchestrate state (data, loading, error) and call services.
3.  **Services** (`xxx.service.ts`): Handles raw API communication and response mapping. No UI concerns (toasts, modals).

## 📏 Coding Rules & Quality Standards

- **TypeScript Everywhere**: No `any`. Use explicit interfaces, generics, and narrowing.
- **File Size Constraint**: Components must be kept maintainable; split into smaller atomic units before exceeding **300 lines**.
- **Naming Conventions**:
  - **Components**: `PascalCase` (e.g., `StatCard.vue`)
  - **Composables**: `useXxx` prefix (e.g., `useTransactions.ts`)
  - **Services**: `xxx.service.ts` suffix (e.g., `auth.service.ts`)
- **UI First**: Always prioritize `shadcn-vue` primitives. NEVER build manual ad-hoc replacements for standard controls like buttons, inputs, or selects.

## 🤖 Agent Strict Mode

Development in this project is guided by strict architectural constraints. If an AI assistant is used:

- Layout files belong in `components/layout`, not `organisms`.
- API calls are forbidden inside components, pages, or layouts.
- Business logic must stay out of `atoms` and `templates`.
- TypeScript safety must be preserved at all times.

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
bun install

# Start development server
bun dev
```

### Configuration

App settings such as sidebar behavior and theme colors can be adjusted in `app.config.ts`.

---

**Hulu Sehat, Hilir Bahagia** — _NurTani Ecosystem_
