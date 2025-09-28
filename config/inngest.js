import { Inngest } from "inngest";
import connectDB from "./db";
import User from "@/models/User";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "vnv-app" });


//for user creation
export const syncUserCreation=inngest.createFunction(
    {
        id:'sync-user-from-clerk'
    },
    {
        event:'clerk/user.created'
    },
    async({event})=>{
        try {
            console.log('Processing user creation event:', event);
            const {id,first_name,image_url,last_name,email_addresses}=event.data
            
            if (!id || !email_addresses || !email_addresses[0]) {
                throw new Error('Missing required user data');
            }
            
            const userData={
                _id:id,
                email:email_addresses[0].email_address,
                name:first_name+" "+last_name,
                imageUrl:image_url
            }
            
            console.log('Connecting to database...');
            await connectDB();
            console.log('Creating user:', userData);
            await User.create(userData);
            console.log('User created successfully');
        } catch (error) {
            console.error('Error in syncUserCreation:', error);
            throw error;
        }
    }
)
// for user updation
export const syncUserUpdation=inngest.createFunction(
    {
        id:'update-user-from-clerk'
    },
    {
        event:'clerk/user.updated'
    },
    async({event})=>{
        try {
            console.log('Processing user update event:', event);
            const {id,first_name,image_url,last_name,email_addresses}=event.data
            
            if (!id || !email_addresses || !email_addresses[0]) {
                throw new Error('Missing required user data');
            }
            
            const userData={
                _id:id,
                email:email_addresses[0].email_address,
                name:first_name+" "+last_name,
                imageUrl:image_url
            }
            
            console.log('Connecting to database...');
            await connectDB();
            console.log('Updating user:', userData);
            await User.findByIdAndUpdate(id,userData);
            console.log('User updated successfully');
        } catch (error) {
            console.error('Error in syncUserUpdation:', error);
            throw error;
        }
    }
)

// user deletion
export const syncUserDeletion=inngest.createFunction(
    {
        id:'delete-user-from-clerk'
    },
    {
        event:'clerk/user.deleted'
    },
    async({event})=>{
        try {
            console.log('Processing user deletion event:', event);
            const {id}=event.data
            
            if (!id) {
                throw new Error('Missing user ID for deletion');
            }
            
            console.log('Connecting to database...');
            await connectDB();
            console.log('Deleting user with ID:', id);
            await User.findByIdAndDelete(id);
            console.log('User deleted successfully');
        } catch (error) {
            console.error('Error in syncUserDeletion:', error);
            throw error;
        }
    }
)