module.exports = {
    default: {
        paths: [
            "src/test/features"
        ],
        dryRun: false,
        format: [
            "progress-bar",
            "summary",
            "json:output/reports/cucumber-report.json", 
            "html:output/reports/cucumber-report.html"
        ],
        parallel: 1,
        formatOptions: {
            colorsEnabled: true,
            snippetInterface: "async-await"
        },
        require: [
            "src/test/step-definitions/*.ts",
            'src/test/support/hooks.ts',
            'src/test/support/world.ts',
        ],
        requireModule: [
            "ts-node/register"
        ]
    }
}