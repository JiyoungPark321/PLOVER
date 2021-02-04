import restapi from "src/api/restapi";

export default class Event {
    constructor() {
        //이벤트 등록
    }

    setState($state) {
        this.$state = $state;
    }

    setTarget($target) {
        this.$target = $target;
    }

    setTitle($title) {
        this.$title = $title;
    }

    setContent($content) {
        this.$content = $content;
    }

    //이벤트 위임기법을 사용한 이벤트 핸들링
    addEvent() {
        this.clickHandler = this.clickEventHandler.bind(this);
        this.keyupHandler = this.keyupEventHandler.bind(this);

        this.$target.addEventListener('click', this.clickHandler);
        this.$target.addEventListener('keyup', this.keyupHandler);
    }

    clickEventHandler(e) {
        if (e.target.id && e.target.id === "register_btn") {
            this.registerStudy();
        }
    };

    async registerStudy() {
        if (!this.$content.value || !this.$title.value || this.$state.tags.length <= 0) {
            alert("모든 입력값을 채워주세요");
            return;
        }

        console.log("== registerStudy ==");
        await restapi.post("/study/article", {
            content: this.$content.value,
            email: "rosenari88@gmail.com",
            hashtag: this.$state.tags,
            notice: false,
            title: this.$title.value
        }).then((response) => {
            console.log(response);
        }).catch((err) => {
            console.log(err);
        });
    }

    keyupEventHandler(e) {
        if (e.target.id && e.target.id === "input_tag") {
            if (e.target.value.length <= 0) {
                this.$state.setTags([]);
                return;
            };

            let tag_list = e.target.value.trim().split(" ");

            for (let i = 0; i < tag_list.length; i++) {
                tag_list[i] = "#" + tag_list[i];
            }

            if (tag_list.length > 0) this.$state.setTags(tag_list);
        }
        //console.log(e.target);
    }

    destroy() {
        this.$target.removeEventListener('click', this.clickHandler);
        this.$target.removeEventListener('keyup', this.keyupHandler);
    }
}