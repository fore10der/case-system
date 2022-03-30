module.exports = {
    stories: [
        "../packages/**/src/**/*.stories.mdx"
    ],
    addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
    framework: "@storybook/react",
    core: {
        builder: "webpack5"
    },
    features: {
        emotionAlias: false,
    },
};
