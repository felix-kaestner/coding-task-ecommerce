import {FunctionComponent} from 'react'
import {FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn, FaGithub} from 'react-icons/fa'

interface NavProps {
  title: string
  items: string[]
}

const Nav: FunctionComponent<NavProps> = ({title, items}) => (
  <div>
    <h6 className="font-semibold">{title}</h6>
    <nav>
      <ul className="flex flex-col py-3">
        {items.map((item) => (
          <li key={item} className="py-1">
            <a href="#" className="text-sm text-gray-700 hover:text-gray-800 ">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </div>
)

const Footer: FunctionComponent = () => (
  <footer className="mt-8">
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 p-4 sm:p-6 lg:grid-cols-2 lg:p-8">
      <div>
        <h6 className="mb-4 font-semibold text-gray-700">Online-Shop</h6>
        <p className="mb-6 max-w-lg text-sm text-gray-700">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam.
        </p>
        <div className="mb-2 flex items-center">
          {[FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn, FaGithub].map(
            (Component, i) => (
              <div key={i} className="h-8 w-8 text-gray-700 hover:text-gray-800">
                <a href="#">
                  <Component size="1.25rem" />
                </a>
              </div>
            )
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Nav
          title="Shopping"
          items={['Order Status', 'Shipping', 'Returns', 'Payment', 'Contact']}
        />
        <Nav
          title="Information"
          items={['Gift Cards', 'Find a Store', 'Newsletter', 'Membership', 'Feedback']}
        />
        <Nav title="Contact" items={['mail@acme.shop', '+1 234 567 89']} />
      </div>
    </div>

    <div className="mx-auto flex h-24 max-w-7xl px-4 sm:px-6 lg:px-8">
      <p className="flex flex-1 items-center justify-center border-t border-gray-200">
        <span className="text-sm text-gray-700">© 2022 ACME, Inc. All rights reserved.</span>
      </p>
    </div>
  </footer>
)

export default Footer
