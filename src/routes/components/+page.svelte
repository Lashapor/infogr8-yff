<script>
    import PageTopCard from "$lib/yff-components/PageTopCard.svelte";
    import InfoCard from "$lib/yff-components/InfoCard.svelte";

    let topCardsData = [
        {
            title: "Explore youth employment data and insights in one place",
            description:
                "Discover insights into the world of work for young people in the UK. Here you can have an overview for topics such as employment, age and gender developments. Explore the dashboards for a deep-dive into the data.",
            theme: "white",
        },
        {
            cardType: "dashboard",
            title: "NEET",
            description:
                "Explore data about people not in education, employment or training in the UK (NEET) from the Office for National Statistics.",
            dataUpdate:
                "Latest data update: <strong>21 Nov 2024.</strong> (Data until Jul-Sept 24) Next release 27 Feb 2025",
            sourceButtonText: "Data sources",
            sourceButtonLink: "#",
            theme: "greenLight",
        },
        {
            cardType: "insights",
            title: "Labour Market",
            description:
                "Description text here to offer page explanation and guide the user. Description text here to offer page explanation and guide the user..",
            dataUpdate:
                "Latest data update: <strong>21 Nov 2024.</strong> (Data until Jul-Sept 24) Next release 27 Feb 2025",
            sourceButtonText: "Data sources",
            sourceButtonLink: "#",
            theme: "blueLight",
        },
        {
            cardType: "dashboards",
            title: "Education",
            description:
                "Description text here to offer page explanation and guide the user. Description text here to offer page explanation and guide the user.",
            dataUpdate:
                "Latest data update: <strong>21 Nov 2024.</strong> (Data until Jul-Sept 24) Next release 27 Feb 2025",
            sourceButtonText: "Data sources",
            sourceButtonLink: "#",
            theme: "purpleLight",
        },
    ];

    let infoCardData = [
        {
            tag: "NEET",
            value: "13.2%",
            title: "Youth unemployment rate",
            dataUpdate: "Last update: Dec 2024",
            buttonText: "Go to insight",
            theme: "neet",
        },
        {
            tag: "labour market",
            value: "13.2%",
            title: "Youth unemployment rate",
            dataUpdate: "Last update: Dec 2024",
            buttonText: "Go to insight",
            theme: "labour market",
        },
        {
            tag: "education",
            value: "13.2%",
            title: "Youth unemployment rate",
            dataUpdate: "Last update: Dec 2024",
            buttonText: "Go to insight",
            theme: "education",
        },
        {
            tag: "cost of living",
            value: "13.2%",
            title: "Youth unemployment rate",
            dataUpdate: "Last update: Dec 2024",
            buttonText: "Go to insight",
            theme: "cost of living",
        },
        {
            tag: "ethnicity",
            value: "13.2%",
            title: "Youth unemployment rate",
            dataUpdate: "Last update: Dec 2024",
            buttonText: "Go to insight",
            theme: "ethnicity",
        },
        {
            tag: "health",
            value: "13.2%",
            title: "Youth unemployment rate",
            dataUpdate: "Last update: Dec 2024",
            buttonText: "Go to insight",
            theme: "health",
        },
        {
            tag: "benefits",
            value: "13.2%",
            title: "Youth unemployment rate",
            dataUpdate: "Last update: Dec 2024",
            buttonText: "Go to insight",
            theme: "benefits",
        },
    ];

    let infoLightCardData = [
        {
            tag: "NEET",
            value: "13.2%",
            title: "Youth unemployment rate",
            dataUpdate: "Last update: Dec 2024",
            buttonText: "Go to insight",
            theme: "neet",
            showLightColor: true,
        },
        {
            tag: "labour market",
            value: "13.2%",
            title: "Youth unemployment rate",
            dataUpdate: "Last update: Dec 2024",
            buttonText: "Go to insight",
            theme: "labour market",
            showLightColor: true,
        },
        {
            tag: "education",
            value: "13.2%",
            title: "Youth unemployment rate",
            dataUpdate: "Last update: Dec 2024",
            buttonText: "Go to insight",
            theme: "education",
            showLightColor: true,
        },
        {
            tag: "cost of living",
            value: "13.2%",
            title: "Youth unemployment rate",
            dataUpdate: "Last update: Dec 2024",
            buttonText: "Go to insight",
            theme: "cost of living",
            showLightColor: true,
        },
        {
            tag: "ethnicity",
            value: "13.2%",
            title: "Youth unemployment rate",
            dataUpdate: "Last update: Dec 2024",
            buttonText: "Go to insight",
            theme: "ethnicity",
            showLightColor: true,
        },
        {
            tag: "health",
            value: "13.2%",
            title: "Youth unemployment rate",
            dataUpdate: "Last update: Dec 2024",
            buttonText: "Go to insight",
            theme: "health",
            showLightColor: true,
        },
        {
            tag: "benefits",
            value: "13.2%",
            title: "Youth unemployment rate",
            dataUpdate: "Last update: Dec 2024",
            buttonText: "Go to insight",
            theme: "benefits",
            showLightColor: true,
        },
    ];
</script>

<div class="w-full flex justify-center">
    <div class="max-w-screen-xl bg-blue-100 w-full px-5">
        <div class="flex flex-col space-y-2 my-5">
            Colors
            <div class="text-color-shades-green-light-300">
                text-color-shades-green-light-300
            </div>
            <div class="text-color-shades-blue-light-300">
                text-color-shades-blue-light-300
            </div>
        </div>
        <div class="flex flex-col space-y-5">
            {#each topCardsData as card}
                <PageTopCard
                    cardType={card.cardType}
                    title={card.title}
                    description={card.description}
                    dataUpdate={card.dataUpdate}
                    sourceButtonText={card.sourceButtonText}
                    sourceButtonLink={card.sourceButtonLink}
                    theme={card.theme}
                />
            {/each}
        </div>
        <div class="flex gap-5 p-10 flex-wrap">
            {#each infoCardData as card}
                <InfoCard
                    tag={card.tag}
                    value={card.value}
                    title={card.title}
                    dataUpdate={card.dataUpdate}
                    buttonText={card.buttonText}
                    theme={card.theme}
                />
            {/each}
        </div>
        <div class="flex gap-5 p-10 flex-wrap">
            {#each infoLightCardData as card}
                <InfoCard
                    tag={card.tag}
                    value={card.value}
                    title={card.title}
                    dataUpdate={card.dataUpdate}
                    buttonText={card.buttonText}
                    theme={card.theme}
                    showLightColor={card.showLightColor}
                />
            {/each}
        </div>
    </div>
</div>
