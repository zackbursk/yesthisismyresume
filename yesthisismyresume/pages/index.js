// This is the main file of the frontend. It contains the form for uploading the image and the submit button.
import './App.css';
import React from 'react';
import { useState, useRef, useReducer } from 'react';
import { Button } from 'flowbite-react';
import {Card, Spacer} from "@nextui-org/react";
import { Grid, Container, Pagination } from "@nextui-org/react";
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import DropZone from "../components/DropZone";
import styles from "../styles/DropZone.module.css";

function App() {
  // reducer function to handle state changes
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_IN_DROP_ZONE":
        return { ...state, inDropZone: action.inDropZone };
      case "ADD_FILE_TO_LIST":
        return { ...state, fileList: state.fileList.concat(action.files) };
      default:
        return state;
    }
  };

  // destructuring state and dispatch, initializing fileList to empty array
  const [data, dispatch] = useReducer(reducer, {
    inDropZone: false,
    fileList: [],
  });
  const hiddenFileInput = useRef(null);
  const [image, setImage] = useState({ preview: '', data: '' })
  const [status, setStatus] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('file', image.data)
    const response = await fetch('http://localhost:5000/image', {
      method: 'POST',
      body: formData,
    })
    if (response) setStatus(response.statusText)
  }

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setImage(img)
  }
  return (
		<DefaultLayout>
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="inline-block max-w-lg text-center justify-center">
					<h1 className={title()}>Yes, this is&nbsp;</h1>
					<h1 className={title({ color: "blue" })}>my&nbsp;</h1>
					<h1 className={title()}>
						resume.
					</h1>
					<h4 className={subtitle({ class: "mt-4" })}>
						Autonomous website creation from a resume, powered by Natural Language Processing and NextUI.
					</h4>
				</div>

				<div className="flex gap-3">
        <DropZone data={data} dispatch={dispatch} />
				</div>

				<div className="mt-8">
				</div>
			</section>
		</DefaultLayout>
	);
}

export default App;
