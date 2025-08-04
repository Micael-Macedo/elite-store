export default function Cart() {
    const totalProducts = 0
    return (
        <a href="/cart" className="hover:bg-gray-300 transition duration-100 ease-in-out">
            <div className="relative">
                {(totalProducts > 0) && <span className="absolute bg-red-500 top-20 right-20">{totalProducts}</span>}
                <img src="" alt="" />
            </div>
        </a>
    )
};
