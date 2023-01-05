const path = require('path');
const fs = require("fs")
const prettier = require("prettier")
const deepMerge = require('deepmerge');

const ALLOWED_FW = {
    SHOPIFY: "shopify",
    SHOPIFY_LOCAL: "shopify_local",
    BIGCOMMERCE: "bigcommerce",
};

function withFrameworkConfig(defaultConfig = {}) {
    let framework = defaultConfig?.framework?.name

    if (!framework) {
        throw new Error("The api framework in next.config is missing");
    }
    if (!Object.values(ALLOWED_FW).includes(framework)) {
        throw new Error(`
        The api framework: ${framework}
        cannot be found, please use one of ${Object.values(ALLOWED_FW).join(", ")}
        `)
    }

    if (framework === ALLOWED_FW.SHOPIFY_LOCAL) {
        framework = ALLOWED_FW.SHOPIFY
    }

    const frameworkNextConfig = require(path.join("../", framework, "next.config"))
    const config = deepMerge(defaultConfig, frameworkNextConfig)

    const tsConfigPath = path.join(process.cwd(), "tsconfig.json")
    const tsConfig = require(tsConfigPath)

    tsConfig.compilerOptions.paths["@framework"] = [`framework/${framework}`]
    tsConfig.compilerOptions.paths["@framework/*"] = [`framework/${framework}/*`]

    fs.writeFileSync(
        tsConfigPath,
        prettier.format(JSON.stringify(tsConfig, null, 2), { parser: "json" })
    )


    return config
}

module.exports = { withFrameworkConfig }