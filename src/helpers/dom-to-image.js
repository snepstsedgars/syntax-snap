import domtoimage from "dom-to-image-more";
import { downloadImage, copyBlobToClipboard } from "@/helpers/core";

export const domToImage = async (type, domNode, imageQuality = 1, scale = 3) => {
    const option = {
        width: domNode.clientWidth * scale,
        height: domNode.clientHeight * scale,
        style: {
            transform: 'scale(' + scale + ')',
            transformOrigin: 'top left'
        }
    }

    if (type == "Copy") {
        domtoimage
            .toBlob(domNode, option)
            .then((blob) => {
                copyBlobToClipboard(blob);
            })
            .catch((err) => {
                console.log(err);
                throw "Oops, something went wrong!";
            });
        return;
    }

    if (type === "Jpeg") option.quality = imageQuality;
    domtoimage["to" + type](domNode, option)
        .then((dataUrl) => {
            downloadImage(dataUrl, type.toLowerCase());
        })
        .catch((err) => {
            console.log(err);
            throw "Oops, something went wrong!";
        });
}