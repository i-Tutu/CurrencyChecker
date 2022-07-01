
export default function Header() {
    return (
        <div as="nav" className="bg-indigo-600">
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <a className="block lg:hidden h-8 w-auto text-gray-200 font-extrabold text-3xl">
                                        CurrencyChecker
                                    </a>
                                    <a className="hidden lg:block h-8 w-auto text-gray-200 font-extrabold text-3xl">
                                        CurrencyChecker
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    )
}