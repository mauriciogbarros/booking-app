import { useFormContext } from "react-hook-form"
import { HotelFormData } from "./ManageHotelForm";

const DetailsSection = () => {
	const {
		register,
		formState: { errors }
	} = useFormContext<HotelFormData>();

	return (
		<div className="flex flex-col gap-4">
			<h1 className="text-3xl font-bold mb-3">Add Hotel</h1>
			<label className="text-gray-700 text-sm font-bold flex-1">
				Name
				<input
					type="text"
					className="border rounded w-full py-1 px-2 font-normal"
					{...register(
						"name",
						{ required: "This field is required." }
					)}
				></input>
				{errors.name && (
					<span	className="text-red-500">{errors.name.message}</span>
				)}
			</label>
			<div className="flex gap-4">
				<label className="text-gray-700 text-sm font-bold flex-1">
					City
					<input
						type="text"
						className="border rounded w-full py-1 px-2 font-normal"
						{...register(
							"city",
							{ required: "This field is required." }
						)}
					></input>
					{errors.city && (
						<span	className="text-red-500">{errors.city.message}</span>
					)}
				</label>
				<label className="text-gray-700 text-sm font-bold flex-1">
					Country
					<input
						type="text"
						className="border rounded w-full py-1 px-2 font-normal"
						{...register(
							"country",
							{ required: "This field is required." }
						)}
					></input>
					{errors.country && (
						<span	className="text-red-500">{errors.country.message}</span>
					)}
				</label>
			</div>
			<label className="text-gray-700 text-sm font-bold flex-1">
				Description
				<textarea
					rows={10}
					className="border rounded w-full py-1 px-2 font-normal"
					{...register(
						"description",
						{ required: "This field is required." }
					)}
				></textarea>
				{errors.description && (
					<span	className="text-red-500">{errors.description.message}</span>
				)}
			</label>
			<label className="text-gray-700 text-sm font-bold flex-1 max-w-[50%]">
				Price Per Night
				<input
					type="number"
					min={1}
					className="border rounded w-full py-1 px-2 font-normal"
					{...register(
						"pricePerNight",
						{ required: "This field is required." }
					)}
				></input>
				{errors.pricePerNight && (
					<span	className="text-red-500">{errors.pricePerNight.message}</span>
				)}
			</label>
			<label className="text-gray-700 text-sm font-bold flex-1 max-w-[50%]">
				Star Rating
				<select 
					className="border rounded w-ful p-2 text-gray-700 font-normal"
					{...register(
						"starRating",
						{ required: "This field is required."}
					)}
				>
					<option value="" className="text-sm font-bold">
						Select a Rating
					</option>
					{[1, 2, 3, 4, 5].map((num, index) => <option key={index} value={num}>{num}</option>)}
				</select>
				{errors.pricePerNight && (
					<span	className="text-red-500">{errors.pricePerNight.message}</span>
				)}
			</label>
		</div>
	);
}

export default DetailsSection;