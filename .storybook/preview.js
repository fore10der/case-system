import * as React from 'react';
import { CaseSystemTheme } from '../packages/components'

export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    docs: {
        source: {
            type: 'dynamic',
            excludeDecorators: true,
        },
    },
}

export const decorators = [
    (Story) => (<CaseSystemTheme><Story/></CaseSystemTheme>)
]
