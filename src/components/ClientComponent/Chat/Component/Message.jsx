import React from 'react'
import moment from 'moment';


function Message({own,messages}) {

    function getTimeAgo(dateTime) {
        const now = moment();
        const givenDateTime = moment(dateTime);
        const timeAgo = givenDateTime.from(now);
        return timeAgo;
      }

    // const own = false
  return (
    <div
            class={own ? "flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end" : "flex w-full mt-2 space-x-3 max-w-xs"}
        >
            {own ? <></> : <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>}
            <div>
                <div
                    class={
                        own
                            ? "bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg"
                            : "bg-gray-300 p-3 rounded-r-lg rounded-bl-lg"
                    }
                >
                    <p class="text-sm">{messages?.text}</p>
                </div>
                <span class="text-xs text-gray-500 leading-none">{getTimeAgo(messages?.createdAt)}</span>
            </div>
            {own ? <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div> : <></>}
        </div>
  )
}

export default Message
