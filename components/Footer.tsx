import Link from 'next/link'
import {FunctionComponent} from 'react'
import {FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn, FaGithub} from 'react-icons/fa'

const navigation = {
  'Shopping': [{name: 'Order Status'}, {name: 'Shipping'}, {name: 'Returns'}, {name: 'Payment'}, {name: 'Contact'}],
  'Information': [{name: 'Gift Cards'}, {name: 'Find a Store'}, {name: 'Newsletter'}, {name: 'Membership'}, {name: 'Feedback'}],
  'Contact': [{name: 'mail@acme.shop', href: 'mailto:mail@acme.shop'}, {name: '+1 234 567 89', href: 'tel:+123456789'}],
}

interface NavProps {
  title: string
  items: {name: string, href?: string}[]
}

const Nav: FunctionComponent<NavProps> = ({title, items}) => (
  <div>
    <h6 className="font-semibold">{title}</h6>
    <nav>
      <ul className="flex flex-col py-3">
        {items.map((item) => (
          <li key={item.name} className="py-1">
            <Link href={item.href ?? "/"}>
              <a className="text-sm text-gray-700 hover:text-gray-800 ">
                {item.name}
              </a>
            </Link>
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
                <Link href="/">
                  <a >
                    <Component size="1.25rem" />
                  </a>
                </Link>
              </div>
            )
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        <Nav
          title="Shopping"
          items={navigation.Shopping}
        />
        <Nav
          title="Information"
          items={navigation.Information}
        />
        <Nav title="Contact" items={navigation.Contact} />
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
