import { Visual } from "../../src/visual";
import powerbiVisualsApi from "powerbi-visuals-api"
import IVisualPlugin = powerbiVisualsApi.visuals.plugins.IVisualPlugin
import VisualConstructorOptions = powerbiVisualsApi.extensibility.visual.VisualConstructorOptions
var powerbiKey: any = "powerbi";
var powerbi: any = window[powerbiKey];

var circleCardD26ECB8D73DB47D49D453E377C2C9503_DEBUG: IVisualPlugin = {
    name: 'circleCardD26ECB8D73DB47D49D453E377C2C9503_DEBUG',
    displayName: 'circleCard',
    class: 'Visual',
    apiVersion: '2.6.0',
    create: (options?: VisualConstructorOptions) => {
        if (Visual) {
            return new Visual(options);
        }

        throw 'Visual instance not found';
    },
    custom: true
};

if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["circleCardD26ECB8D73DB47D49D453E377C2C9503_DEBUG"] = circleCardD26ECB8D73DB47D49D453E377C2C9503_DEBUG;
}

export default circleCardD26ECB8D73DB47D49D453E377C2C9503_DEBUG;