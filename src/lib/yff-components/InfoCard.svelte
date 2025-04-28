<script lang="ts">
    export let tag = "";
    export let value = "";
    export let title = "";
    export let dataUpdate = "";
    export let buttonText = "";
    export let showLightColor = false;

    export let theme:
        | "neet"
        | "labour market"
        | "education"
        | "ethnicity"
        | "cost of living"
        | "health"
        | "benefits" = "neet";

    let themeColors = {
        neet: {
            bgColor: "bg-color-shades-green-light-300",
            bgLightColor: "bg-color-shades-green-light-100",
            textColor: "text-black",
        },
        "labour market": {
            bgColor: "bg-color-shades-blue-light-300",
            bgLightColor: "bg-color-shades-blue-light-100",
            textColor: "text-black",
        },
        education: {
            bgColor: "bg-color-primary-purple-0",
            bgLightColor: "bg-color-primary-purple-light-100",
            textColor: "text-white",
        },
        ethnicity: {
            bgColor: "bg-color-primary-orange-dark-accent-0",
            bgLightColor: "bg-color-shades-orange-dark-100",
            textColor: "text-white",
        },
        "cost of living": {
            bgColor: "bg-color-primary-orange-light-0",
            bgLightColor: "bg-color-primary-orange-light-100",
            textColor: "text-black",
        },
        health: {
            bgColor: "bg-color-shades-pink-light-200",
            bgLightColor: "bg-color-shades-pink-light-100",
            textColor: "text-black",
        },
        benefits: {
            bgColor: "bg-color-shades-green-dark-500",
            bgLightColor: "bg-color-shades-green-dark-100",
            textColor: "text-white",
        },
    };

    let cardBgColor;

    $: cardBgColor = showLightColor
        ? themeColors[theme].bgLightColor
        : themeColors[theme].bgColor;

    let isHovered = false;

    const onClickHandler = () => {
        console.log("clicked");
    };
</script>

<button
    on:click={onClickHandler}
    on:mouseenter={() => (isHovered = true)}
    on:mouseleave={() => (isHovered = false)}
    class="{cardBgColor} px-4 py-5 relative rounded-md min-h-[282px] flex flex-col justify-between"
>
    <div class="w-full flex items-center justify-end">
        <div
            class="bg-white leading-none w-fit px-3 pt-2 pb-[3px] rounded-md text-paragraph-base-bold"
        >
            {tag}
        </div>
    </div>
    <div
        class={`{textColorClass} transform-on-hover ${isHovered ? "hovered" : ""}`}
    >
        <div class="text-insights-bold leading-none mb-2">{value}</div>
        <div class="text-paragraph-large-regular leading-tight mb-2">
            {title}
        </div>
        <div class="text-paragraph-small-regular leading-tight">
            {dataUpdate}
        </div>
    </div>
    <div class="absolute right-5 bottom-5 flex items-center gap-2">
        <div
            class={` ${isHovered ? "block text-paragraph-base-regular" : "hidden"}`}
        >
            {buttonText}
        </div>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="12"
            viewBox="0 0 13 12"
            fill="none"
        >
            <path
                d="M1.25633 0V1.84615H9.18556L0.333252 10.6985L1.63479 12L10.4871 3.14769V11.0769H12.3333V0H1.25633Z"
                fill="#1E3F41"
            />
        </svg>
    </div>
</button>

<style>
    .transform-on-hover {
        transition: transform 0.6s ease;
    }
    .hovered {
        transform: translateY(-30px);
    }
</style>
