import { Contact } from "../models/Contact.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/AsyncHandler.js";

const ContactMessage = asyncHandler(async (req, res) => {

    const { fullName, email, phoneNumber, message } = req.body

    if (!fullName || !email || !phoneNumber || !message) {
        throw new ApiError(400, "All Fields are required..!")
    }

    const contact = Contact.create({
        fullName,
        email,
        phoneNumber,
        message
    })

    return res.status(201).json(
        new ApiResponse(200, contact, "Message send successfully...")
    )
})

const getContactMessage = asyncHandler(async(req,res)=>{
    try {
        const getContact = await Contact.find({})
        res.status(200).json(
            new ApiResponse(201,getContact,"notification found successfully...")
        )
    } catch (error) {
        throw new ApiError(404,"notification not found....")
    }
})

const deleteContact = asyncHandler(async(req,res)=>{
try {
    const { id } = req.params
    const contactDel = await Contact.findByIdAndDelete({_id:id})
    res.status(200).json(
        new ApiResponse(201,contactDel,"notification delete successfully...")
    )

} catch (error) {
    throw new ApiError(404,"Something went wrong while deleting the notification....")
}
})

export {
    ContactMessage,
    getContactMessage,
    deleteContact
}