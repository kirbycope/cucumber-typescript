/** URL looks like: {baseURL}}/secure */
class SecurePage {
    /** The `<div>` for the message. */
    get divFlashAlert() { return $('#flash') }
}

/** URL looks like: {baseURL}}/secure */
export default new SecurePage();
