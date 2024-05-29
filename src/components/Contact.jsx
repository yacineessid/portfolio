
import { CONTACT } from './../constants/index';
const Contact = () => {
  return (
    <div className="border-b border-neutral-900 mb-20">
    <h1 className="my-10 text-center text-4xl">Get in touch</h1>
    <div className="text-center tracking-tighter">
        <p className='my-4'>{CONTACT.phoneNo}</p>
        <a href='#' className='borber-b'>{CONTACT.email}</a>

    </div>

    </div>
  )
}

export default Contact