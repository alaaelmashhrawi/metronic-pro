<template>
    <div>
        <h1>slot  examples</h1>

        <slot name="child">
            <slot name="title">
                <div>efult data of slot 1</div>
            </slot>
            <slot name="para"></slot>
        </slot>

    </div>
</template>
<style>
    p {
        color: blue;
        border: solid 1px #ccc;
        padding: 15px;
    }


</style>