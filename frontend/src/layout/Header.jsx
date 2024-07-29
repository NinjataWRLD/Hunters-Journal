import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas);

function Header() {
  return (
    <>
      <header className="bg-white px-4">
        <form className="flex items-center justify-between w-full space-x-6">
          <div className="flex items-center p-1 space-x-6">
            <div className="shrink-0 h-14 w-14">
              <FontAwesomeIcon icon="fa-solid fa-circle-user" className="h-full w-full object-cover rounded-full" />
            </div>
            <label className="block">
              <span className="sr-only">Choose profile photo</span>
              <input type="file" className="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-violet-700
                     hover:file:bg-violet-100"/>
            </label>
          </div>
          <ul role="list" className="marker:text-sky-400 text-slate-400 flex space-x-5">
            <li className="text-violet-700">Account</li>
            <li className="text-violet-700">Log In</li>
            <li className="text-violet-700">Register</li>
          </ul>
        </form>
      </header>
    </>
  );
}
export default Header;