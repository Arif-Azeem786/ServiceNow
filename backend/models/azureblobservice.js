require('dotenv').config();
const { BlobServiceClient } = require('@azure/storage-blob');

// Load the SAS Token from environment variables
const sasToken = process.env.AZURE_STORAGE_SAS_TOKEN;
const storageAccountName = process.env.AZURE_STORAGE_ACCOUNT_NAME;
const containerName = process.env.AZURE_STORAGE_CONTAINER_IMAGES; // adjust if needed

// Construct the BlobServiceClient with SAS URL
const blobServiceClient = new BlobServiceClient(`https://${storageAccountName}.blob.core.windows.net?${sasToken}`);

// Function to get a reference to a specific container
const getContainerClient = (containerName) => {
    return blobServiceClient.getContainerClient(containerName);
};

// Function to upload buffer to Azure Blob Storage
const uploadToBlobStorage = async (buffer, blobName) => {
    try {
        const containerClient = blobServiceClient.getContainerClient(containerName);
        const blockBlobClient = containerClient.getBlockBlobClient(blobName);
        const uploadResponse = await blockBlobClient.uploadData(buffer);

        if (uploadResponse.errorCode) {
            throw new Error(`Azure upload failed: ${uploadResponse.errorCode}`);
        }

        const blobUrl = blockBlobClient.url;
        return blobUrl;
    } catch (error) {
        console.error('Upload to Azure failed:', error.message);
        throw error;
    }
};

// Test the connection by listing available containers
const testAzureConnection = async () => {
    try {
        let containers = [];
        for await (const container of blobServiceClient.listContainers()) {
            containers.push(container.name);
        }
        console.log("✅ Azure Blob Storage Connection Successful!");
        console.log("📂 Available Containers:", containers);
    } catch (error) {
        console.error("❌ Azure Blob Storage Connection Failed:", error.message);
    }
};

// Run the test function
testAzureConnection();

module.exports = { getContainerClient, uploadToBlobStorage };
