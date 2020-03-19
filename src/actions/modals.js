export const OPEN_MODAL_UPLOAD_JSON_FILE = 'OPEN_MODAL_UPLOAD_JSON_FILE';
export const CLOSE_MODAL_UPLOAD_JSON_FILE = 'CLOSE_MODAL_UPLOAD_JSON_FILE';

export const openModalUploadJsonFile = (impure) => {
    return ({
        type: OPEN_MODAL_UPLOAD_JSON_FILE,
    });
};

export const closeModalUploadJsonFile = (impure) => {
    return ({
        type: CLOSE_MODAL_UPLOAD_JSON_FILE,
    });
};
