

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
                        <iframe src="https://maps.google.com/maps?q=6.502216,3.354647&z=15&output=embed" loading="lazy" title="Google Map" className="contact-map__iframe" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMapAndMessageComp;
