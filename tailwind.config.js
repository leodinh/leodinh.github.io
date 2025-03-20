// tailwind.config.js
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            animation: {
                moveCloud1: 'moveClouds1 20s infinite linear',
                moveCloud2: 'moveClouds2 30s infinite linear',
                moveCloud3: 'moveClouds3 25s infinite linear',
                moveCloud4: 'moveClouds4 35s infinite linear'
            },
            keyframes: {
                moveClouds1: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' }
                },
                moveClouds2: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' }
                },
                moveClouds3: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' }
                },
                moveClouds4: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' }
                }
            }
        }
    },
    plugins: []
};
