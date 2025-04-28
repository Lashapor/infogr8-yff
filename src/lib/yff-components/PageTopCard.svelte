<script lang="ts">
    import { marked } from "marked";
    import { onMount } from "svelte";
    import { isMobile } from "$lib/_shared/utils.js";

    export let cardType = "";
    export let title = "";
    export let description = "";
    export let dataUpdate = "";
    export let sourceButtonText = "";
    export let sourceButtonLink = "";
    export let theme:
        | "white"
        | "greenLight"
        | "blueLight"
        | "purpleLight"
        | "orangeLight"
        | "orangeDark"
        | "pinkLight"
        | "greenDark"
        | "pinkDark"
        | "blueDark" = "greenLight";

    let themeColors = {
        white: {
            bgColor: "bg-white",
            cornerColor: "#F5BDA0",
            circleColor: "#F09C70",
        },
        greenLight: {
            bgColor: "bg-color-shades-green-light-100",
            cornerColor: "#E9E099",
            circleColor: "#D2C233",
        },
        blueLight: {
            bgColor: "bg-color-shades-blue-light-200",
            cornerColor: "#87CED4",
            circleColor: "#69C2C9",
        },
        purpleLight: {
            bgColor: "bg-color-shades-purple-light-100",
            cornerColor: "#CBA7B6",
            circleColor: "#B17A91",
        },
        orangeLight: {
            bgColor: "bg-color-shades-orange-light-200",
            cornerColor: "#FACD8B",
            circleColor: "#F7AB3D",
        },
        orangeDark: {
            bgColor: "bg-color-shades-orange-dark-100",
            cornerColor: "#F5BDA0",
            circleColor: "#EB7A41",
        },
        pinkLight: {
            bgColor: "bg-color-shades-pink-light-100",
            cornerColor: "#FACD8B",
            circleColor: "#F7AB3D",
        },
        greenDark: {
            bgColor: "bg-color-shades-green-dark-100",
            cornerColor: "#B7C9B1",
            circleColor: "#91AE8A",
        },
        pinkDark: {
            bgColor: "bg-color-shades-pink-dark-100",
            cornerColor: "#F5ABAE",
            circleColor: "#EF8285",
        },
        blueDark: {
            bgColor: "bg-color-shades-blue-dark-100",
            cornerColor: "#99BCC7",
            circleColor: "#679AAD",
        },
    };

    let onlyTitleAndDescription = cardType === "";

    let mobile = false;
    onMount(() => {
        mobile = isMobile();
    });

    let cornerObj = {
        width: 273,
        height: 273,
    };

    let circleObj = {
        radius: 39.5,
        fill: themeColors[theme].circleColor,
        top: 97,
        right: 97,
        width: 79,
        height: 79,
    };

    $: {
        cornerObj.width = mobile ? 150 : 273;
        cornerObj.height = mobile ? 150 : 273;
    }

    $: {
        circleObj.radius = mobile ? 20 : 39.5;
        circleObj.top = mobile ? 14 : 20;
        circleObj.right = mobile ? 14 : 28;
        circleObj.width = mobile ? 40 : 79;
        circleObj.height = mobile ? 40 : 79;
    }
</script>

<div
    class="relative p-5 md:px-10 md:pt-10 md:pb-6 flex flex-col {onlyTitleAndDescription
        ? 'justify-center'
        : 'justify-between'}  h-[400px] {themeColors[theme].bgColor}"
>
    <div
        class="flex flex-col space-y-5 {onlyTitleAndDescription ? 'w-3/4' : ''}"
    >
        <div class="uppercase text-paragraph-large-bold">{cardType}</div>
        <div class="text-h2-bold">{title}</div>
        <div class="text-h4-regular {onlyTitleAndDescription ? '' : 'w-2/3'}">
            {description}
        </div>
    </div>
    <div class="flex justify-between">
        <div class="text-paragraph-small-regular">
            {@html marked.parse(dataUpdate || "")}
        </div>
        <a
            class="flex items-center gap-2 text-paragraph-large-bold {sourceButtonLink ===
            ''
                ? 'hidden'
                : ''}"
            href={sourceButtonLink}
        >
            {sourceButtonText}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
            >
                <path
                    d="M10 12L8.6 10.55L12.15 7H0V5H12.15L8.6 1.45L10 0L16 6L10 12Z"
                    fill="#222222"
                />
            </svg>
        </a>
    </div>
    <div class="absolute top-0 right-0">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={cornerObj.width}
            height={cornerObj.height}
            fill="none"
        >
            <path
                d={`M${cornerObj.width} ${cornerObj.height}V0H0L${cornerObj.width} ${cornerObj.height}Z`}
                fill={themeColors[theme].cornerColor}
            />
        </svg>
    </div>
    <div class={`absolute top-${circleObj.top} right-${circleObj.right}`}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={circleObj.width}
            height={circleObj.height}
        >
            <circle
                cx={circleObj.radius}
                cy={circleObj.radius}
                r={circleObj.radius}
                fill={circleObj.fill}
            />
        </svg>
    </div>
</div>
