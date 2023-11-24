export default function Searchbar()
{
    return(
        <main>
            <div className="ml-10 mr-10">
                <input 
                className="drop-shadow-xl p-1 block w-full rounded-md outline-[#000066] bg-gray-100 focus:bg-white"
                type="text"
                placeholder="Search Location" ></input>
            </div>
        </main>
    );
}