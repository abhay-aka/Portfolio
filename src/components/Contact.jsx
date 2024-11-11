import { CONTACT } from "../constants";

const Contact = () => {
    return (
        <div className="border-t border-stone-200/20 pb-20">
            <h2 className="my-10 text-center text-4xl font-bold text-white">Get in Touch</h2>
            <div className="text-center tracking-tighter text-gray-300">
                <p className="my-4 hover:text-white transition-colors">
                    {CONTACT.address}
                </p>
                <p className="my-4 hover:text-white transition-colors">
                    {CONTACT.phoneNo}
                </p>
                <a 
                    href={`mailto:${CONTACT.email}`} 
                    className="border-b border-gray-300 hover:border-white hover:text-white transition-colors"
                >
                    {CONTACT.email}
                </a>
            </div>
        </div>
    )
}

export default Contact;