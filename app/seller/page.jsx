'use client'
import React, { useState } from "react";
import { Upload, Package, DollarSign, Tag, FileText, ImagePlus, X, Save, AlertCircle } from "lucide-react";

const AddProduct = () => {
  const [files, setFiles] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Earphone');
  const [price, setPrice] = useState('');
  const [offerPrice, setOfferPrice] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Product added:', { name, description, category, price, offerPrice, files });
    setLoading(false);
    
    // Reset form
    setFiles([]);
    setName('');
    setDescription('');
    setPrice('');
    setOfferPrice('');
  };

  const removeImage = (index) => {
    const updatedFiles = [...files];
    updatedFiles[index] = null;
    setFiles(updatedFiles);
  };

  const categories = [
    'Earphone', 'Headphone', 'Watch', 'Smartphone', 'Laptop', 'Camera', 'Accessories'
  ];

  const isFormValid = name && description && price && offerPrice && files.some(file => file);
  const discountPercentage = price && offerPrice && price > offerPrice 
    ? Math.round(((price - offerPrice) / price) * 100) 
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-6 py-12 max-w-5xl">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-violet-500 to-purple-600 px-8 py-16">
            <div className="text-center text-white">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <Package className="w-12 h-12" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">Add New Product</h1>
              <p className="text-violet-100 text-xl">Create a stunning product listing that sells</p>
            </div>
          </div>

          {/* Form */}
          <div className="p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Progress Indicator */}
              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${files.some(file => file) ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-400'}`}>
                    <ImagePlus className="w-5 h-5" />
                  </div>
                  <div className={`w-16 h-1 ${name ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${name && description ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-400'}`}>
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className={`w-16 h-1 ${price && offerPrice ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${price && offerPrice ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-400'}`}>
                    <DollarSign className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Product Images Section */}
              <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <ImagePlus className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Product Images</h3>
                    <p className="text-gray-600">Upload high-quality images to showcase your product</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {[...Array(4)].map((_, index) => (
                    <div key={index} className="relative group">
                      <label htmlFor={`image${index}`} className="block cursor-pointer">
                        <input 
                          onChange={(e) => {
                            const updatedFiles = [...files];
                            updatedFiles[index] = e.target.files[0];
                            setFiles(updatedFiles);
                          }} 
                          type="file" 
                          id={`image${index}`} 
                          hidden 
                          accept="image/*"
                        />
                        <div className={`
                          aspect-square rounded-2xl border-3 border-dashed transition-all duration-300 overflow-hidden
                          ${files[index] 
                            ? 'border-green-300 bg-green-50 shadow-lg' 
                            : 'border-violet-300 bg-violet-50 hover:border-violet-400 hover:bg-violet-100 hover:shadow-lg group-hover:scale-105'
                          }
                        `}>
                          {files[index] ? (
                            <div className="relative w-full h-full">
                              <img
                                src={URL.createObjectURL(files[index])}
                                alt={`Product ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    removeImage(index);
                                  }}
                                  className="w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110 shadow-lg"
                                >
                                  <X className="w-5 h-5" />
                                </button>
                              </div>
                            </div>
                          ) : (
                            <div className="flex flex-col items-center justify-center h-full text-violet-400 group-hover:text-violet-600 transition-colors duration-200">
                              <Upload className="w-10 h-10 mb-3" />
                              <span className="text-sm font-semibold">Upload Image</span>
                              <span className="text-xs text-violet-300 mt-1">
                                {index === 0 ? 'Main Photo' : `Photo ${index + 1}`}
                              </span>
                            </div>
                          )}
                        </div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Details */}
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Left Column */}
                <div className="space-y-8">
                  <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <Package className="w-6 h-6 text-violet-600" />
                      Basic Information
                    </h3>

                    {/* Product Name */}
                    <div className="mb-6">
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Product Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Enter a compelling product name"
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:border-violet-500 focus:ring-4 focus:ring-violet-100 transition-all duration-200 bg-gray-50 focus:bg-white text-gray-800 placeholder-gray-400"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required
                      />
                    </div>

                    {/* Category */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Category *
                      </label>
                      <select
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:border-violet-500 focus:ring-4 focus:ring-violet-100 transition-all duration-200 bg-gray-50 focus:bg-white text-gray-800"
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
                      >
                        {categories.map(cat => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-100 rounded-3xl p-8 shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <DollarSign className="w-6 h-6 text-green-600" />
                      Pricing Details
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Original Price *
                        </label>
                        <input
                          type="number"
                          step="0.01"
                          placeholder="0.00"
                          className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-200 bg-white text-gray-800"
                          onChange={(e) => setPrice(e.target.value)}
                          value={price}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Sale Price *
                        </label>
                        <input
                          type="number"
                          step="0.01"
                          placeholder="0.00"
                          className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-200 bg-white text-gray-800"
                          onChange={(e) => setOfferPrice(e.target.value)}
                          value={offerPrice}
                          required
                        />
                      </div>
                    </div>

                    {/* Discount Display */}
                    {discountPercentage > 0 && (
                      <div className="mt-6 p-4 bg-green-100 border border-green-200 rounded-2xl">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Tag className="w-5 h-5 text-green-600" />
                            <span className="text-green-800 font-semibold">Discount Applied</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-green-600 font-bold text-lg">
                              ${(price - offerPrice).toFixed(2)} saved
                            </span>
                            <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                              {discountPercentage}% OFF
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Column */}
                <div>
                  <div className="bg-blue-50 border-2 border-blue-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200 h-full">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <FileText className="w-6 h-6 text-blue-600" />
                      Product Description
                    </h3>
                    <textarea
                      rows={12}
                      placeholder="Write a detailed and compelling description that highlights the key features, benefits, and specifications of your product..."
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-white resize-none text-gray-800 placeholder-gray-400"
                      onChange={(e) => setDescription(e.target.value)}
                      value={description}
                      required
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-2">
                      <span>Be detailed and specific</span>
                      <span>{description.length}/1000</span>
                    </div>

                    {/* Form Validation */}
                    {!isFormValid && (
                      <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-2xl flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-amber-800 mb-1">Complete Required Fields</h4>
                          <ul className="text-sm text-amber-700 space-y-1">
                            {!files.some(file => file) && <li>• Upload at least one product image</li>}
                            {!name && <li>• Enter product name</li>}
                            {!description && <li>• Add product description</li>}
                            {!price && <li>• Set original price</li>}
                            {!offerPrice && <li>• Set sale price</li>}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-8">
                <button 
                  type="submit" 
                  disabled={!isFormValid || loading}
                  className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white font-bold py-5 px-16 rounded-2xl transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100 hover:shadow-2xl flex items-center gap-4 text-lg"
                >
                  {loading ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Adding Product...
                    </>
                  ) : (
                    <>
                      <Save className="w-6 h-6" />
                      Add Product to Store
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;