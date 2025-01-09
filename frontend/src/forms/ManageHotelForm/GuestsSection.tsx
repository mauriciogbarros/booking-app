import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const GuestsSection = () => {
	const {
		register,
		formState: { errors }
	} = useFormContext<HotelFormData>();

	return (
		<div>
			<h2 className="text-2xl font-bold mb-3">Guests</h2>
			<div className="flex flex-col gap-4 bg-gray-300 px-4 py-4">
				<div className="flex gap-4">
					<label className="text-sm font-bold flex-1 max-w-[50%]">
						Adults
						<input
							type="number"
							min={1}
							className="border rounded w-full py-1 px-2 font-normal"
							{...register(
								"adultCount",
								{ required: "This field is required." }
							)}
						></input>
						{errors.adultCount && (
							<span	className="text-red-500">{errors.adultCount.message}</span>
						)}
					</label>
					<label className="text-sm font-bold flex-1 max-w-[50%]">
						Children
						<input
							type="number"
							min={0}
							className="border rounded w-full py-1 px-2 font-normal"
							{...register(
								"childCount",
								{ required: "This field is required." }
							)}
						></input>
						{errors.childCount && (
							<span	className="text-red-500">{errors.childCount.message}</span>
						)}
					</label>
				</div>
			</div>
		</div>
	);
}

export default GuestsSection;