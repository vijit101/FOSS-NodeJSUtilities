// npm i qrcode
// usage import QRCodeUtility from "./QRCode.utility.js";

import qrcode from "qrcode";



export default class QRCodeUtility {
    static async returnQRcodeUrl(url) {
        try {
            return await qrcode.toDataURL(url);
        } catch (err) {
            console.error("QR code generation failed:", err);
            return null; // Handle errors gracefully
        }
    }
    //usage in other imported js file -  let qrurl = await QRCodeUtility.returnQRcodeUrl("/qrcode/" + (products.length + 1)); 
}
