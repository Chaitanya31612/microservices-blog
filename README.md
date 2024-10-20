# Blogging Application (using Microservices)

This is a nice and simple blogging application and my attempt to learn microservices architecture. The services in the following application are:

- posts service
- comments service
- moderation service
- query service
- event bus

![image](https://github.com/user-attachments/assets/d7cc549d-efac-4ad7-b747-0c8e03602189)

## Getting Started

Follow these steps to get the Microservices blogging app up and running on your local machine.

### Prerequisites

- Node.js installed on your machine. General MERN stack setup
- Docker and Minikube installed
- Skaffold installed

### Installation

1. Clone this repository:

```bash
git clone https://github.com/Chaitanya31612/microservices-blog
```

2. Navigate to the project directory:

  ```bash
  cd microservices-blog
  ```
3. Install dependencies for posts, comments, query, moderation, event-bus, client:

```bash
npm install
```

4. To get `posts.com` ready on your local, enter the following in your `/etc/hosts` file (for linux)

Find minikube ip address by typing `minikube ip` on your terminal after `minikube start`.
```bash
$(minikube ip)     posts.com
```

4. Start the setup using skaffold:

  ```bash
skaffold dev / skaffold dev --port-forward
```


Open your browser and go to http://posts.com to access the microservices blog application.
