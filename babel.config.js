module.exports = {
    presets: [['@babel/preset-env', { targets: { node: 'current' } }],

    /*it will automatically pick the runtime,
    If we don't add the runtime thing, wit will
    pick an error: */

    ["@babel/preset-react", { runtime: "automatic" }]

    ],
};