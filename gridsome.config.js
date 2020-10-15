const {slugify} = require("gridsome/lib/utils");
const options = {
    default: {
        manifestOptions: {
            short_name: "Buildwith IONOS",
            description: "Get your web project live in seconds",
            display: "standalone",
            background_color: "#f7fafc",
            theme_color: "#003D8F",
            gcm_sender_id: undefined,
            start_url: "/",
            categories: ["business", "productivity"],
            lang: "en-US",
            dir: "auto",
        },
        appleMobileWebAppStatusBarStyle: "default",
        manifestPath: "manifest.json",
        icon: {appleMaskIcon: {url: "./favicon.png"}},
        msTileColor: "#f7fafc",
        workboxOptions: {
            cacheId: "buildwith-pwa",
            globPatterns: ["assets/@(js|css)/*", "index.html"],
            skipWaiting: true,
        },
    },
};

module.exports = {
    siteName: "Buildwith IONOS",
    plugins: [
        {
            use: 'gridsome-plugin-brotli',
            options: {
                extensions: ['css', 'html', 'js', 'svg', 'json']
            }
        },
        {
            use: "gridsome-plugin-tailwindcss",
            options: {
                tailwindConfig: "./tailwind.config.js",
                purgeConfig: {},
                presetEnvConfig: {},
                shouldPurge: true,
                shouldImport: true,
                shouldTimeTravel: true,
                shouldPurgeUnusedKeyframes: true,
            },
        },
        {
            use: "gridsome-source-static-meta",
            options: {
                path: "settings/*.json",
            },
        },
        {
            use: "@gridsome/source-filesystem",
            options: {
                typeName: "Author",
                path: "./content/author/*.md",
            },
        },
        {
            use: "@gridsome/source-filesystem",
                options: {
                typeName: "SampleTag",
                path: "./content/sampleTags/*.json",
            },
        },
        {
            use: "@gridsome/source-filesystem",
            options: {
                typeName: "Blog",
                path: ["./content/blog/**/*.md", "./content/samples/**/*.md"],
                refs: {
                    author: {
                      typeName: "Author",
                      create: true,
                    },
                    tags: {
                        typeName: "Tag",
                        create: true,
                    },
                    category: {
                        typeName: "Category",
                        create: true,
                    },
                },
            },
        },
        {
            use: "@gridsome/source-filesystem",
            options: {
                typeName: "BuildConfigSetup",
                path: "./content/buildConfiguration/setup/*.json",
            },
        },
        {
            use: "@gridsome/source-filesystem",
            options: {
                typeName: "BuildConfigPrepare",
                path: "./content/buildConfiguration/prepare/*.json",
            },
        },
        {
            use: "@gridsome/source-filesystem",
            options: {
                typeName: "BuildConfigBuild",
                path: "./content/buildConfiguration/build/*.json",
            },
        },
        {
          use: "@gridsome/source-filesystem",
          options: {
            typeName: "BuildTemplate",
            path: "./content/buildConfiguration/template/*.json",
            refs: {
              setup_ref: "BuildConfigSetup",
              prepare_ref: "BuildConfigPrepare",
              build_ref: "BuildConfigBuild"
            }
          },
        },
        {
          use: "@gridsome/source-filesystem",
          options: {
             typeName: "Sample",
                path: "./content/samples/**/*.md",
                refs: {
                    author: {
                      typeName: "Author",
                      create: true,
                    },
                    tags: {
                        typeName: "SampleTag",
                        create: true,
                    },
                    category: {
                        typeName: "SampleCategory",
                        create: true,
                    },
                    template_ref: "BuildTemplate"
                },
            },
        },
        {
            use: "gridsome-plugin-htaccess",
            options: {
                // contentSecurityPolicy: {
                //   "default-src": ["self"],
                //   "script-src": ["self"],
                // },
                disableServerSignature: true,
                forceHttps: true,
                pingable: false,
                preventScriptInjection: true,
                textCompression: [
                    "text/html",
                    "application/javascript",
                    "text/css",
                    "image/png",
                ],
            },
        },
        {
            use: "@allanchain/gridsome-plugin-pwa",
            options: options["default"],
        },
    ],
    templates: {
        Blog: [
            {
                path: '/blog/:title',
                component: './src/templates/BlogEntry.vue',
            },
            {
                name: "sample",
                path: (node) => {
                    return `/sample/${slugify(node.title)}`
                },
            }
        ],
        Category: [
            {
                path: "/category/:title",
                component: "./src/templates/Category.vue",
            },
        ],
        SampleTag: [
            {
                path: "/sample_tags/:title",
                component: "./src/templates/SampleTags.vue",
            },
        ],
        Sample: [
            {
                path: "/sample/:title",
                component: "./src/templates/SampleEntry.vue",
            },
        ],
        Tag: [
            {
                path: "/tag/:title",
                component: "./src/templates/Tag.vue",
            },
        ],
    },
    transformers: {
        remark: {
            externalLinksTarget: "_blank",
            externalLinksRel: ["nofollow", "noopener", "noreferrer"],
            plugins: [
                require('./packages/gridsome-plugin-remark-figure'),
            ]
        },
        json: {}
    },
    chainWebpack: (config) => {
        config.resolve.alias.set("@images", "@/assets/images");
    },
};
