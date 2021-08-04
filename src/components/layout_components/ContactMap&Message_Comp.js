

//  Import _ContactMap&Message_Comp SCSS.
import '../../scss/layout_components/_ContactMap&Message_Comp.scss';

const ContactMapAndMessageComp = () => {
    return (
        <div className="ContactMapAndMessageComp">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 contact-message__wrapper order-md-2">
                        <form action="">
                            <h3>Send us a message</h3>
                            <div className="form-item__wrapper">
                                <input type="text" className="form-control" id="name" placeholder="John Deo*" />
                            </div>
                            <div className="form-item__wrapper">
                                <input type="phone" className="form-control" id="phone" placeholder="0802 8xx xxxx*" />
                            </div>
                            <div className="form-item__wrapper">
                                <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                            </div>
                            <div className="form-item__wrapper">
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
                            </div>

                            <button className="send_button">Send Message</button>
                        </form>
                    </div>
                    <div className="col-md-7 contact-map__wrapper order-md-1">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.8229043024407!2d3.341247215257259!3d6.544033895266851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8dde69950581%3A0xb221299f74407794!2sJimade%20St%2C%20Papa%20Ajao%20102215%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1628024326759!5m2!1sen!2sus"
                            loading="lazy" title="Google Map" className="contact-map__iframe" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMapAndMessageComp;
