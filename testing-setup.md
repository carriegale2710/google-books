1. Install vitest

```bash
npm install vitest --save-dev
```

2. Add a testing script:

```js
    "scripts": {
        "dev": "vite",
        "build": "vite build",
        "preview": "vite preview",
        "test": "vitest"
    },
```

3. Add a dummy test (test files with vitest should be .jsx)

- NOTE: may need to import describe, expect and, it from vitest at first.

```js
describe('Setup test', () => {
  it('checks true', () => {
    expect(true).toBe(true);
  });
});
```

4. Add js-dom to be able to test in DOM-like environment

```bash
npm install jsdom --save-dev
```

5. Add jsdom to vite config

```js
export default defineConfig({
    plugins: [react()],
    test: {
        globals: true, - get rid of imports in every file
        environment: "jsdom",
    },
});
```

6. Add react testing library

```bash
npm install @testing-library/react @testing-library/jest-dom --save-dev
```

7. Setup file

```js
import { cleanup } from '@testing-library/react';
import { expect, afterEach } from 'vitest';
import * as matchers from '@testing-library/jest-dom';

// extends matchers to include dom related testing stuff
expect.extend(matchers);

// remove anything from the dom after each test, so that we always start with a clean slate
afterEach(() => {
  cleanup();
});
```

8. Update vite.config

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './config/setup.js',
  },
});
```

9. Add the library that will allow us to simulate user events

```bash
npm install @testing-library/user-event --save-dev
```
