module.exports = {
    theme: {
        extend: {
            animation: {
                typing: 'typing 2s steps(20) infinite',
            },
            keyframes: {
                typing: {
                    '0%, 100%': { width: '0%' },
                    '50%': { width: '100%' },
                },
            },
        },
    },
};
