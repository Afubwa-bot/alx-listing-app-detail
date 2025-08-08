const BookingSection: React.FC<{price:number }> = ({price}) => {
    return (
        <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold">${price}/night</h3>
            <div className="mt-4">
                <label>check-in</label>
                <input type="date" className="w-full p-2 border rounded mt-1" />
            </div>
        <div className="mt-4">
            <label>check-out</label>
            <input type="date" className="w-full p-2 border rounded mt-2" />
        </div>

        {/*Total Payment*/}
        <div className="mt-4">
            <p> Total payment: <strong> ${price * 7 }</strong></p>
        
        </div>

        {/*Reserve button */}
        <button className="mt-4 bg-green-500 text-white px-4 py-2
        rounded-md "> Reserve now </button>
        </div>
        );
};

export default BookingSection;