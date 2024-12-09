<template>
    <footer>
        <div class="container">
            <span>Made by</span>
            <a href="https://lukaszdzielo.github.io/" target="_blank" class="link">
                <svg width="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 200 200">
                    <defs>
                        <linearGradient id="a" x1="201.42" y1="229.25" x2="351.8" y2="379.62"
                            gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="var(--appFooter--color)"></stop>
                            <stop offset="1" stop-color="var(--appFooter--color)"></stop>
                        </linearGradient>
                    </defs>
                    <path
                        d="M2e2 295v95h95a95 95 0 000-190H237.74v85.35l37.75-10.08v38.6L237.74 324v28.31h56.19a57.26 57.26.0 100-114.52H275.49"
                        transform="translate(-195 -195)"
                        style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:10px;stroke:url(#a)">
                    </path>
                </svg>
            </a>
        </div>
    </footer>
</template>

<style scoped>
footer {
    padding-block: 1.5rem 2.5rem;
    background-color: var(--appFooter--bg);
    color: var(--appFooter--color);
    font-size: 0.75rem;
    text-align: center;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
}

.link {
    display: flex;
}
</style>