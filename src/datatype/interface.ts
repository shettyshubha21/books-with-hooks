import React from "react";

export interface InputProps {
    type: 'text';
    id?: string;
    name?: string;
    placeholder: string;
    value?: string | number | readonly string[];
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export interface TextProps {
    children: React.ReactNode;
    color: string;
    size?: string;
    type: 'heading' | 'paragraph' | 'default' | 'sub-heading' | 'title';
    weight?: number;
}

export interface BookInfo {
    title: string;
    author_name: Array<string>;
    first_publish_year: number;
}


