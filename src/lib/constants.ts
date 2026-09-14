export interface Social {
    username: string;
    url: string;
}

export interface Constants {
    homepage: string;
    email: string;
    phone: string;
    location: string;
    repo: string;
    socials: {
        twitter: Social;
        linkedin: Social;
        github: Social;
        discord: Social;
        reddit: Social;
        bluesky: Social;
    }
    dmca: string;
}

export const constants: Constants = {
    homepage: "neosubhamoy.com",
    email: "hey@neosubhamoy.com",
    phone: "+91 80166 26636",
    location: "Basirhat, West Bengal, India",
    repo: "https://github.com/neosubhamoy/neosubhamoy-website",
    socials: {
        twitter: {
            username: "neo_subhamoy",
            url: "https://x.com/neo_subhamoy"
        },
        linkedin: {
            username: "neo-subhamoy",
            url: "https://www.linkedin.com/in/neo-subhamoy"
        },
        github: {
            username: "neosubhamoy",
            url: "https://github.com/neosubhamoy"
        },
        discord: {
            username: "neo_subhamoy",
            url: "https://discord.com/users/507923927214063627"
        },
        reddit: {
            username: "neosubhamoy",
            url: "https://www.reddit.com/user/neosubhamoy"
        },
        bluesky: {
            username: "neosubhamoy.com",
            url: "https://bsky.app/profile/neosubhamoy.com"
        }
    },
    dmca: "https://www.dmca.com/Protection/Status.aspx?ID=8b6891f8-49be-46fd-83a4-efbc89007880"
};