export const GET_LISTOFBOOKS_SCHEMA = {
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$id": "http://example.com/example.json",
    "type": "array",
    "default": [],
    "title": "Root Schema",
    "items": {
        "type": "object",
        "title": "A Schema",
        "required": [
            "id",
            "name",
            "type",
            "available"
        ],
        "properties": {
            "id": {
                "type": "integer",
                "title": "The id Schema",
                "examples": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6
                ]
            },
            "name": {
                "type": "string",
                "title": "The name Schema",
                "examples": [
                    "The Russian",
                    "Just as I Am",
                    "The Vanishing Half",
                    "The Midnight Library",
                    "Untamed",
                    "Viscount Who Loved Me"
                ]
            },
            "type": {
                "type": "string",
                "title": "The type Schema",
                "examples": [
                    "fiction",
                    "non-fiction"
                ]
            },
            "available": {
                "type": "boolean",
                "title": "The available Schema",
                "examples": [
                    true,
                    false
                ]
            }
        },
        "examples": [{
            "id": 1,
            "name": "The Russian",
            "type": "fiction",
            "available": true
        },
        {
            "id": 2,
            "name": "Just as I Am",
            "type": "non-fiction",
            "available": false
        },
        {
            "id": 3,
            "name": "The Vanishing Half",
            "type": "fiction",
            "available": true
        },
        {
            "id": 4,
            "name": "The Midnight Library",
            "type": "fiction",
            "available": true
        },
        {
            "id": 5,
            "name": "Untamed",
            "type": "non-fiction",
            "available": true
        },
        {
            "id": 6,
            "name": "Viscount Who Loved Me",
            "type": "fiction",
            "available": true
        }]
    },
    "examples": [
        [{
            "id": 1,
            "name": "The Russian",
            "type": "fiction",
            "available": true
        },
        {
            "id": 2,
            "name": "Just as I Am",
            "type": "non-fiction",
            "available": false
        },
        {
            "id": 3,
            "name": "The Vanishing Half",
            "type": "fiction",
            "available": true
        },
        {
            "id": 4,
            "name": "The Midnight Library",
            "type": "fiction",
            "available": true
        },
        {
            "id": 5,
            "name": "Untamed",
            "type": "non-fiction",
            "available": true
        },
        {
            "id": 6,
            "name": "Viscount Who Loved Me",
            "type": "fiction",
            "available": true
        }]
    ]
}

