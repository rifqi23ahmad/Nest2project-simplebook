export const GET_ALLORDER_SCHEMA = {
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
            "bookId",
            "customerName",
            "createdBy",
            "quantity",
            "timestamp"
        ],
        "properties": {
            "id": {
                "type": "string",
                "title": "The id Schema",
                "examples": [
                    "a_JVA9aWB3SG4iiGAr9SO",
                    "WpW9xs36IY2bXBBD5BUpG"
                ]
            },
            "bookId": {
                "type": "integer",
                "title": "The bookId Schema",
                "examples": [
                    1,
                    5
                ]
            },
            "customerName": {
                "type": "string",
                "title": "The customerName Schema",
                "examples": [
                    "John Wolff",
                    "Guillermo Abbott"
                ]
            },
            "createdBy": {
                "type": "string",
                "title": "The createdBy Schema",
                "examples": [
                    "bbd5c5a8f946318c18e73b5e3faad67443e99525313e8361a3c9dc753d38f007"
                ]
            },
            "quantity": {
                "type": "integer",
                "title": "The quantity Schema",
                "examples": [
                    1
                ]
            },
            "timestamp": {
                "type": "integer",
                "title": "The timestamp Schema",
                "examples": [
                    1662301212897,
                    1662456093464
                ]
            }
        },
        "examples": [{
            "id": "a_JVA9aWB3SG4iiGAr9SO",
            "bookId": 1,
            "customerName": "John Wolff",
            "createdBy": "bbd5c5a8f946318c18e73b5e3faad67443e99525313e8361a3c9dc753d38f007",
            "quantity": 1,
            "timestamp": 1662301212897
        },
        {
            "id": "WpW9xs36IY2bXBBD5BUpG",
            "bookId": 5,
            "customerName": "Guillermo Abbott",
            "createdBy": "bbd5c5a8f946318c18e73b5e3faad67443e99525313e8361a3c9dc753d38f007",
            "quantity": 1,
            "timestamp": 1662456093464
        }]
    },
    "examples": [
        [{
            "id": "a_JVA9aWB3SG4iiGAr9SO",
            "bookId": 1,
            "customerName": "John Wolff",
            "createdBy": "bbd5c5a8f946318c18e73b5e3faad67443e99525313e8361a3c9dc753d38f007",
            "quantity": 1,
            "timestamp": 1662301212897
        },
        {
            "id": "WpW9xs36IY2bXBBD5BUpG",
            "bookId": 5,
            "customerName": "Guillermo Abbott",
            "createdBy": "bbd5c5a8f946318c18e73b5e3faad67443e99525313e8361a3c9dc753d38f007",
            "quantity": 1,
            "timestamp": 1662456093464
        }]
    ]
}