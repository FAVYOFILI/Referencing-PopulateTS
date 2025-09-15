"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOneBook = exports.deleteAllBooks = exports.UpdateBook = exports.GetOneBook = exports.GetAllBooks = exports.Createbook = void 0;
const bookmodel_1 = require("../model/bookmodel");
const Createbook = async (req, res) => {
    try {
        const { title, yearPublished, category, author } = req.body;
        if (!title || !yearPublished || !category || !author) {
            res.status(400).json({ message: "All fields are required" });
            return;
        }
        const checkifbookExists = await bookmodel_1.BookModel.findOne({ author });
        if (checkifbookExists) {
            res.status(400).json({ message: "Book already exists" });
            return;
        }
        const createBook = await bookmodel_1.BookModel.create({
            title,
            yearPublished,
            category,
            author,
        });
        res
            .status(201)
            .json({ message: "Book created successfully", data: createBook });
    }
    catch (err) {
        res.status(500).json({ message: "An error occurred", err: err.message });
    }
};
exports.Createbook = Createbook;
const GetAllBooks = async (req, res) => {
    try {
        const getAllBooks = await bookmodel_1.BookModel.find();
        if (!getAllBooks) {
            res.status(404).json({ message: "No book." });
        }
        res
            .status(200)
            .json({ message: "Users gotten successfully", data: getAllBooks });
    }
    catch (err) {
        res.status(500).json({ message: "An error occurred", err: err.message });
    }
};
exports.GetAllBooks = GetAllBooks;
const GetOneBook = async (req, res) => {
    try {
        const { id } = req.params;
        const getOneBook = await bookmodel_1.BookModel.findById(id);
        if (!getOneBook) {
            res.status(404).json({ message: "Book not found" });
        }
        res
            .status(200)
            .json({ message: "Book gotten successfully", data: getOneBook });
    }
    catch (err) {
        res.status(500).json({ message: "An error occurred", err: err.message });
    }
};
exports.GetOneBook = GetOneBook;
const UpdateBook = async (req, res) => {
    try {
        const { title, yearPublished, category, author } = req.body;
        const updateBook = await bookmodel_1.BookModel.findByIdAndUpdate(req.params.id, { title, yearPublished, category, author }, { new: true });
        if (!updateBook) {
            res.status(404).json({ message: "Book not found" });
        }
        res
            .status(200)
            .json({ message: "Book updated successfully", data: updateBook });
    }
    catch (err) {
        res.status(500).json({ message: "An error occurred", err: err.message });
    }
};
exports.UpdateBook = UpdateBook;
const deleteAllBooks = async (req, res) => {
    try {
        const deleteAllBooks = await bookmodel_1.BookModel.deleteMany();
        if (!deleteAllBooks) {
            res.status(404).json({ message: "Books not found" });
        }
        res.status(200).json({ message: "Books deleted successfully" });
    }
    catch (err) {
        res.status(500).json({ message: "An error occurred", err: err.message });
    }
};
exports.deleteAllBooks = deleteAllBooks;
const deleteOneBook = async (req, res) => {
    try {
        const deleteOneBook = await bookmodel_1.BookModel.findByIdAndDelete(req.params.id);
        if (!deleteOneBook) {
            res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json({ message: "Book deleted successfully" });
    }
    catch (err) {
        res.status(500).json({ message: "An error occurred", err: err.message });
    }
};
exports.deleteOneBook = deleteOneBook;
//# sourceMappingURL=bookController.js.map