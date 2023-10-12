//===================
//ANIME
//===================
export type AnimeType = {
    "mal_id": number,
    "url": string,
    "images": ImagesType,
    "trailer": TrailerType,
    "approved": boolean,
    "titles": TitlesType,
    "title": string,
    "title_english": string,
    "title_japanese": string,
    "title_synonyms": TitleSynonymsType,
    "type": string,
    "source": string,
    "episodes": number,
    "status": string,
    "airing": boolean,
    "aired": AiredType,
    "duration": string,
    "rating": string,
    "score": number,
    "scored_by": number,
    "rank": number,
    "popularity": number,
    "members": number,
    "favorites": number,
    "synopsis": string,
    "background": string,
    "season": string,
    "year": number,
    "broadcast": BroadCastType,
    "producers": AnimeDevInfo,
    "licensors": AnimeDevInfo,
    "studios": AnimeDevInfo,
    "genres": AnimeDevInfo,
    "explicit_genres": AnimeDevInfo,
    "themes": AnimeDevInfo,
    "demographics": AnimeDevInfo,
    "relations": RelationsType,
    "theme": ThemeType,
    "external": ExternalType,
    "streaming": StreamingType
}

export type ImagesType = {
    "jpg": {
        "image_url": string,
        "small_image_url": string
        "large_image_url": string
    },
    "webp": {
        "image_url": string
        "small_image_url": string
        "large_image_url": string
    }
}
export type TrailerType = {
    "youtube_id": string
    "url": string
    "embed_url": string
}
export type TitlesType = [
    {
        "type": string
        "title": string
    }
]
export type TitleSynonymsType = string[] | null
export type AiredType = {
    "from": string
    "to": string
    "string": string
    "prop": {
        "from": {
            "day": number
            "month": number
            "year": number
        },
        "to": {
            "day": number
            "month": number
            "year": number
        },
    }
}
export type BroadCastType = {
    "day": string
    "time": string
    "timezone": string
    "string": string
}
export type AnimeDevInfo = [
    {
        "mal_id": number,
        "type": string
        "name": string
        "url": string
    }
]

export type RelationsType = [
    {
        "relation": string
        "entry": AnimeDevInfo
    }
]
export type ThemeType = {
    "openings": string[]
    "endings": string[]
}
export type ExternalType = [
    {
        "name": string
        "url": string
    }
]
export type StreamingType = [
    {
        "name": string
        "url": string
    }
]

//========================
// ANIME CHARACTERS
//========================

export type CharactersType = {

    "character": {
        "mal_id": number,
        "url": string,
        "images": ImagesType
        "name": string
    },
    "role": string
    "voice_actors": [
        {
            "person": {
                "mal_id": number,
                "url": string,
                "images": {
                    "jpg": {
                        "image_url": string
                    }
                },
                "name": string
            },
            "language": string
        }
    ]

}
