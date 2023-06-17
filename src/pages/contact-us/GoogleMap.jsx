import '../contact-us/GoogleMap.css'

const GoogleMapsLink = () => {
  return (
    <div className="map1">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7975.108388828017!2d30.07504374804697!3d-1.9303315060453006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spolice%20hospital%20rwanda!5e0!3m2!1sen!2srw!4v1685716934156!5m2!1sen!2srw"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Maps"
    ></iframe>
    </div>
  );
};

export default GoogleMapsLink;