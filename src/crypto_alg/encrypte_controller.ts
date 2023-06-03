// import sha256 from 'crypto-js/sha256';
// import {sha256} from 'crypto-js/sha256';

import crypto from 'crypto-js';

function enc_hex(password: string) {
    let hash_uuid: any = crypto.SHA256(password);
    return hash_uuid.toString(crypto.enc.Base64);
}

export {enc_hex};
